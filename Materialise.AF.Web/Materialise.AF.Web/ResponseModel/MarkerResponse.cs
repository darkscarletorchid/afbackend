using System.Collections.Generic;

namespace Materialise.AF.Web.ResponseModel
{
	public class MarkerResponse
	{
		public int UserId { get; set; }
		public string UserName { get; set; }
		public IEnumerable<MarkerModel> Markers { get; set; }
	}

	public class MarkerModel
	{
		public string MarkerId { get; set; }
		public string Letter { get; set; }
	}
}