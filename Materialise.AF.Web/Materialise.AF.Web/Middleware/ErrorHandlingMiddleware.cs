using System;
using System.Net;
using System.Security;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Materialise.AF.Web.Middleware
{
	public class ErrorHandlingMiddleware
	{
		private readonly RequestDelegate _next;

		/// <summary>
		/// Global Error Handling
		/// </summary>
		/// <param name="next"></param>
		public ErrorHandlingMiddleware(RequestDelegate next)
		{
			_next = next;
		}

		/// <summary>
		/// Next pipeline implementation
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		public async Task Invoke(HttpContext context)
		{
			try
			{
				await _next(context);
			}
			catch (Exception ex)
			{
				await HandleExceptionAsync(context, ex);
			}
		}

		private static Task HandleExceptionAsync(HttpContext context, Exception exception)
		{
			var code = exception is SecurityException ? HttpStatusCode.Unauthorized : HttpStatusCode.InternalServerError;

			context.Response.StatusCode = (int)code;

			return context.Response.WriteAsync(exception.Message);
		}
	}
}