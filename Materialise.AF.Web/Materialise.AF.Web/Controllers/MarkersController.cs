using System;
using System.Linq;
using Materialise.AF.Web.Models;
using Materialise.AF.Web.RequestModels;
using Microsoft.AspNetCore.Mvc;

namespace Materialise.AF.Web.Controllers
{
    [Route("api/[controller]")]
    public class MarkersController : Controller
    {
        private readonly DataContext _dataContext;

        public MarkersController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var markers = _dataContext.Markers;

            return Ok(markers);
        }

        [HttpPost]
        public IActionResult Index([FromBody] UserMarkerRequest request)
        {
            var user = _dataContext.Users.FirstOrDefault(q => q.Token == request.Token && q.IsActive);
            if (user == null)
                throw new Exception("User does not exist");

            var marker = _dataContext.Markers.FirstOrDefault(q => q.Key == request.Marker);
            if (marker == null)
                throw new Exception("Marker does not exist");

            var userMarker = new UserMarker
            {
                UserId = user.Id,
                MarkerId = marker.Id,
                DateTime = DateTime.UtcNow
            };

            _dataContext.UserMarkers.Add(userMarker);
            try
            {
                _dataContext.SaveChanges();
            }
            catch (Exception e)
            {

            }
            return Ok();
        }
    }
}
