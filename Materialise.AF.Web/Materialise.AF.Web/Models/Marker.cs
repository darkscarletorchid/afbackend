using System.Collections.ObjectModel;

namespace Materialise.AF.Web.Models
{
	public class Marker
	{
		public int Id { get; set; }
		public string Key { get; set; }
		public string Value { get; set; }

		public virtual Collection<UserMarker> UserMarkers { get; set; }
	}
}