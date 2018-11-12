using System.Collections.Generic;
using System.Linq;
using Materialise.AF.Web.Models;
using Microsoft.EntityFrameworkCore;

namespace Materialise.AF.Web.Services
{
    public class MarkerRepository : IMarkerRepository
    {
        private readonly DataContext _dataContext;

        public MarkerRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<Marker> GetMarkers()
        {
            var markers = _dataContext.Markers
                .Include(q => q.Collection);
                //.Include(q => q.UserMarkers);

            return markers;
        }

        public Marker Get(string key)
        {
            var marker = _dataContext.Markers.FirstOrDefault(q => q.Key == key);

            return marker;
        }

        public User GetRequestedUser(string token)
        {
            return _dataContext.Users.FirstOrDefault(q => q.Token == token);
        }

        public void AddMarker(UserMarker userMarker)
        {
            _dataContext.UserMarkers.Add(userMarker);

            try
            {
                _dataContext.SaveChanges();
            }
            catch
            {
                // ignored
            }
        }
    }
}
