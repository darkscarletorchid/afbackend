using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

		// This method gets called by the runtime. Use this method to add services to the container.
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

			services.AddCors();

			services.Configure<TokenSettings>(Configuration.GetSection("TokenSettings"));

			const string connection = "Data Source=.;Database=AF;Integrated Security=true";
			services.AddDbContext<DataContext>(options => options.UseSqlServer(Configuration.GetSection("ConnectionStrings")["DefaultConnection"]));
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
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

			app.UseSwagger();

			app.UseSwaggerUI(setupAction => setupAction.SwaggerEndpoint("v1/swagger.json", "V1 Docs"));

			app.UseStaticFiles();

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
