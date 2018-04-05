using Materialise.AF.Web.Middleware;
using Materialise.AF.Web.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace Materialise.AF.Web
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc();

      services.AddSwaggerGen(options =>
      {
        options.SwaggerDoc("v1", new Info
        {
          Title = "AF REST API",
          TermsOfService = "None"
        });
      });

      services.AddCors(o => o.AddPolicy("local", builder =>
      {
        builder.AllowAnyOrigin()
          .AllowAnyHeader()
          .AllowAnyMethod()
          .SetIsOriginAllowedToAllowWildcardSubdomains();
      }));

      services.Configure<TokenSettings>(Configuration.GetSection("TokenSettings"));

      services.AddDbContext<DataContext>(options =>
        options.UseSqlServer(Configuration.GetSection("ConnectionStrings")["DefaultConnection"]));
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseBrowserLink();
      }
      else
      {
        app.UseExceptionHandler("/Error");
      }

      app.UseDefaultFiles();
      app.UseStaticFiles();

      app.UseSwagger();

      app.UseSwaggerUI(setupAction => setupAction.SwaggerEndpoint("v1/swagger.json", "V1 Docs"));

      app.UseStaticFiles();

      app.UseCors(o => o.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

      app.UseMiddleware(typeof(ErrorHandlingMiddleware));

      app.UseMvc(routes =>
      {
        routes.MapRoute(
          name: "default",
          template: "{controller}/{action=Index}/{id?}");
      });
    }
  }
}
