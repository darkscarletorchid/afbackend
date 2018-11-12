using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Security.Claims;
using Materialise.AF.Web.Models;
using Materialise.AF.Web.RequestModels;
using Materialise.AF.Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Materialise.AF.Web.Controllers
{
    [Route("api/[controller]")]
    public class MarkersController : Controller
    {
        private readonly IMarkerRepository _markerRepository;
        private readonly IUserRepository _userRepository;

        public MarkersController(IMarkerRepository markerRepository, IUserRepository userRepository)
        {
            _markerRepository = markerRepository;
            _userRepository = userRepository;
        }

        [Authorize]
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Marker>), 200)]
        [ProducesResponseType(500)]
        public IActionResult Index()
        {
            var markers = _markerRepository.GetMarkers();

            return Ok(markers);
        }

        [Authorize]
        [HttpPost]
        [ProducesResponseType(200)]
        [ProducesResponseType(500)]
        public IActionResult Index([FromBody] UserMarkerRequest request)
        {
            var user = _userRepository.GetValidUser(request.Token);
            if (user == null)
                throw new Exception("User does not exist");

            var marker = _markerRepository.Get(request.Marker);
            if (marker == null)
                throw new Exception("Marker does not exist");

            var claim = HttpContext.User?.Claims.FirstOrDefault(q => q.Type == ClaimTypes.NameIdentifier)?.Value;
            if (!string.IsNullOrEmpty(claim))
            {
                var requestedUser = _markerRepository.GetRequestedUser(request.Token);
                if (requestedUser == null || requestedUser.Email != claim)
                    throw new SecurityException("Operation is not permitted.");
            }

            var userMarker = new UserMarker
            {
                UserId = user.Id,
                MarkerId = marker.Id,
                DateTime = DateTime.UtcNow
            };

            _markerRepository.AddMarker(userMarker);

            return Ok();
        }
    }
}
