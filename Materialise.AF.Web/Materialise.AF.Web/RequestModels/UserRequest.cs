namespace Materialise.AF.Web.RequestModels
{
    public class UserRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool RulesAccepted { get; set; }
    }
}
