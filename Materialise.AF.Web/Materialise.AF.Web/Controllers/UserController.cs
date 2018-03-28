using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Materialise.AF.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Materialise.AF.Web.Controllers
{
	[Route("api/[controller]")]
	public class UserController : Controller
	{
		private readonly TokenSettings _tokenSettings;

		public UserController(IOptions<TokenSettings> tokenSettings)
		{
			_tokenSettings = tokenSettings.Value;
		}

		[HttpGet]
		public IActionResult Index()
		{
			return Ok("HEY");
		}

		[HttpPost]
		public IActionResult Index(string userName)
		{
			var token = GenerateToken(userName);

			return Ok(token);
		}

		private string GenerateToken(string userName)
		{
			var claims = new[]
			{
				new Claim(JwtRegisteredClaimNames.Sub, userName),
				new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
			};

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_tokenSettings.Key));
			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

			var token = new JwtSecurityToken(_tokenSettings.Issuer, _tokenSettings.Audience, claims, expires: DateTime.Now.AddDays(1), signingCredentials: creds);

			return new JwtSecurityTokenHandler().WriteToken(token);
		}
	}
}