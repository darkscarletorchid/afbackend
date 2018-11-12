using System;
using System.Collections.Generic;
using System.Linq;
using Materialise.AF.Web.Models;
using Materialise.AF.Web.RequestModels;
using Materialise.AF.Web.ResponseModel;
using Materialise.AF.Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Materialise.AF.Web.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;

        public UserController(IUserRepository userRepository, ITokenService tokenService)
        {
            _userRepository = userRepository;
            _tokenService = tokenService;
        }

        [AllowAnonymous]
        [HttpGet]
        [ProducesResponseType(typeof(IOrderedEnumerable<MarkerResponse>), 200)]
        [ProducesResponseType(500)]
        public IActionResult Index()
        {
            var userMarkers = _userRepository.GetUsers().ToList();

            var markerResponse = userMarkers.Select(q => new MarkerResponse
            {
                UserId = q.Id,
                UserName = $"{q.FirstName} {q.LastName}",
                Progress = CalculateProgress(q.RegistrationDate, q.UserMarkers.Select(mk => mk.DateTime).ToList()),
                Markers = q.UserMarkers.Select(m => new MarkerModel
                {
                    MarkerId = m.Marker.Key,
                    Letter = m.Marker.Value,
                    Collection = m.Marker.Collection.Name,
                    Timestamp = m.DateTime
                })
            }).OrderByDescending(q => q.Markers.Count()).ThenBy(q => q.Progress);

            return Ok(markerResponse);
        }

        [Authorize]
        [HttpGet]
        [Route("{id:int}")]
        [ProducesResponseType(typeof(MarkerResponse), 200)]
        [ProducesResponseType(500)]
        public IActionResult Index(int id)
        {
            var user = _userRepository.GetUser(id);

            if (user == null)
                return NotFound($"User with id '{id}' doesn't exist");

            var markerResponse = new MarkerResponse
            {
                UserId = user.Id,
                UserName = $"{user.FirstName} {user.LastName}",
                Progress = CalculateProgress(user.RegistrationDate, user.UserMarkers.Select(q => q.DateTime).ToList()),
                Markers = user.UserMarkers.Select(q => new MarkerModel
                {
                    MarkerId = q.Marker.Key,
                    Letter = q.Marker.Value,
                    Collection = q.Marker.Collection.Name,
                    Timestamp = q.DateTime
                })
            };

            return Ok(markerResponse);
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserResponse), 200)]
        [ProducesResponseType(500)]
        public IActionResult Index([FromBody] UserRequest userRequest)
        {
            CheckRequired("Email", userRequest.Email);
            CheckRequired("First Name", userRequest.FirstName);
            CheckRequired("Last Name", userRequest.LastName);
            CheckRequired("Phone", userRequest.Phone);

            if (!userRequest.RulesAccepted)
            {
                throw new Exception("You must accept rules");
            }

            if (_userRepository.CheckUserExists(userRequest.Email))
                throw new Exception($"'{userRequest.Email}' already exists");

            var token = _tokenService.GenerateToken(userRequest.Email);

            var user = new User
            {
                FirstName = userRequest.FirstName,
                LastName = userRequest.LastName,
                Email = userRequest.Email,
                Phone = userRequest.Phone,
                RegistrationDate = DateTime.UtcNow,
                Token = token,
                RulesAccepted = userRequest.RulesAccepted,
                IsActive = true
            };

            _userRepository.Create(user);

            return Ok(new UserResponse
            {
                Id = user.Id,
                Token = user.Token
            });
        }

        private static void CheckRequired(string field, string fieldValue)
        {
            if (string.IsNullOrWhiteSpace(fieldValue))
                throw new Exception($"{field} is required");
        }

        private static TimeSpan CalculateProgress(DateTime registrationDate, List<DateTime> markerDate)
        {
            if (!markerDate.Any())
                return TimeSpan.Zero;

            var lastDate = markerDate.OrderByDescending(q => q.Ticks).FirstOrDefault();

            var res = lastDate - registrationDate;
            return res;
        }
    }
}
