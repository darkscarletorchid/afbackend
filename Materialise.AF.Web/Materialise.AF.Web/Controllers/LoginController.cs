using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Materialise.AF.Web.Models;
using Materialise.AF.Web.RequestModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Materialise.AF.Web.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly TokenSettings _tokenSettings;

        public LoginController(IOptions<TokenSettings> tokenSettings)
        {
            _tokenSettings = tokenSettings.Value;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateToken([FromBody] LoginModel login)
        {
            if (!Authenticate(login))
                return Unauthorized();

            var token = BuildeToken();

            return Ok(new {token});
        }

        public string BuildeToken()
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_tokenSettings.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_tokenSettings.Issuer,
                _tokenSettings.Audience,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private bool Authenticate(LoginModel login)
        {
            return login.Login == _tokenSettings.Login && login.Password == _tokenSettings.Password;
        }
    }
}
