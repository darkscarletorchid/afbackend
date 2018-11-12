using System.Text;
using Materialise.AF.Web.Middleware;
using Materialise.AF.Web.Models;
using Materialise.AF.Web.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
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
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = Configuration["TokenSettings:Issuer"],
                        ValidAudience = Configuration["TokenSettings:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["TokenSettings:Key"]))
                    };
                });

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

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IMarkerRepository, MarkerRepository>();
            services.AddScoped<ITokenService, TokenService>();
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

            app.UseStaticFiles(new StaticFileOptions
            {
                ServeUnknownFileTypes = true,
                DefaultContentType = "text/plain"
            });

            app.UseAuthentication();

            if (env.IsDevelopment())
            {
                app.UseSwagger();

                app.UseSwaggerUI(setupAction => setupAction.SwaggerEndpoint("v1/swagger.json", "V1 Docs"));
            }

            app.UseStaticFiles();

            app.UseCors(o => o.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseMiddleware(typeof(ErrorHandlingMiddleware));

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}"
                );
            });
        }
    }
}
