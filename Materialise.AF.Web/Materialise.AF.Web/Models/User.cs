using System;

namespace Materialise.AF.Web.Models
{
	public class User
	{
		public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public string Token { get; set; }
		public DateTime RegistrationDate { get; set; }
	}
}