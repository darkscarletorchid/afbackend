using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Materialise.AF.Web.Models;
using Materialise.AF.Web.RequestModels;
using Materialise.AF.Web.ResponseModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
			var userMarkers = _dataContext.UserMarkers
				.Include(q => q.User)
				.Include(q => q.Marker)
				.ThenInclude(q => q.UserMarkers)
				.GroupBy(q => q.User)
				.ToList();

			var markerResponse = userMarkers.Select(q => new MarkerResponse
			{
				UserId = q.Key.Id,
				UserName = $"{q.Key.FirstName} {q.Key.LastName}",
				Markers = q.Select(m => new MarkerModel
				{
					MarkerId = m.Marker.Key,
					Letter = m.Marker.Value,
					Timestamp = m.DateTime
				})
			});

			return Ok(markerResponse);
		}

		[HttpGet]
		[Route("{id:int}")]
		public IActionResult Index(int id)
		{
			var user = _dataContext.Users
				.Include(q => q.UserMarkers)
				.ThenInclude(q => q.Marker)
				.FirstOrDefault(q => q.Id == id);

			if (user == null)
				return NotFound($"User with id '${id}' doesn't exist");

			var markerResponse = new MarkerResponse
			{
				UserId = user.Id,
				UserName = $"{user.FirstName} {user.LastName}",
				Markers = user.UserMarkers.Select(q => new MarkerModel
				{
					MarkerId = q.Marker.Key,
					Letter = q.Marker.Value,
					Timestamp = q.DateTime
				})
			};

			return Ok(markerResponse);
		}

		[HttpPost]
		public IActionResult Index([FromBody] UserRequest userRequest)
		{
			CheckRequired("Email", userRequest.Email);
			CheckRequired("First Name", userRequest.FirstName);
			CheckRequired("Last Name", userRequest.LastName);

			var checkUser = _dataContext.Users.FirstOrDefault(q => q.Email.Equals(userRequest.Email, StringComparison.InvariantCultureIgnoreCase));
			if (checkUser != null)
				throw new Exception($"'{userRequest.Email}' already exists");

			var token = GenerateToken(userRequest.Email);

			var user = new User
			{
				FirstName = userRequest.FirstName,
				LastName = userRequest.LastName,
				Email = userRequest.Email,
				RegistrationDate = DateTime.UtcNow,
				Token = token
			};

			_dataContext.Users.Add(user);
			_dataContext.SaveChanges();

			return Ok(new {user.Id, user.Token});
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

		private static void CheckRequired(string field, string fieldValue)
		{
			if (string.IsNullOrWhiteSpace(fieldValue))
				throw new Exception($"{field} is required");
		}
	}
}