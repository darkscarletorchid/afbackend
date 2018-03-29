using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Materialise.AF.Web.Models;
using Materialise.AF.Web.RequestModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Materialise.AF.Web.Controllers
{
	[Route("api/[controller]")]
	public class UserController : Controller
	{
		private readonly TokenSettings _tokenSettings;
		private readonly DataContext _dataContext;

		public UserController(IOptions<TokenSettings> tokenSettings, DataContext dataContext)
		{
			_tokenSettings = tokenSettings.Value;
			_dataContext = dataContext;
		}

		[HttpGet]
		public IActionResult Index()
		{
			var markers = _dataContext.Markers;
			var users = _dataContext.Users;
			var userMarkers = _dataContext.UserMarkers;
			
			return Ok(markers);
		}

		[HttpPost]
		public IActionResult Index([FromBody] UserRequest userRequest)
		{
			if (string.IsNullOrWhiteSpace(userRequest.UserName))
				throw new NullReferenceException("userName is required");

			var checkUser = _dataContext.Users.FirstOrDefault(q => q.Name == userRequest.UserName);
			if (checkUser != null)
				throw new Exception($"'{userRequest.UserName}' already exists");

			var token = GenerateToken(userRequest.UserName);

			var user = new User
			{
				Name = userRequest.UserName,
				Email = userRequest.Email,
				RegistrationDate = DateTime.UtcNow,
				Token = token
			};

			_dataContext.Users.Add(user);
			_dataContext.SaveChanges();

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