using System.Collections.Generic;
using Materialise.AF.Web.Models;

namespace Materialise.AF.Web.Services
{
    public interface IMarkerRepository
    {
        IEnumerable<Marker> GetMarkers();
        Marker Get(string key);
        User GetRequestedUser(string token);
        void AddMarker(UserMarker marker);
    }
}
