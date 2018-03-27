using Microsoft.AspNetCore.Mvc;

namespace Materialise.AF.Web.Controllers
{
	public class ApiController : Controller
	{
		// GET
		public IActionResult Index()
		{
			return
			View();
		}
	}
}