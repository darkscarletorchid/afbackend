using System;
using System.Collections.ObjectModel;

namespace Materialise.AF.Web.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Token { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool RulesAccepted { get; set; }
        public bool IsActive { get; set; }

        public virtual Collection<UserMarker> UserMarkers { get; set; }
    }
}
