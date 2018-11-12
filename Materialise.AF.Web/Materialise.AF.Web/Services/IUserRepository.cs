using System.Collections.Generic;
using Materialise.AF.Web.Models;

namespace Materialise.AF.Web.Services
{
    public interface IUserRepository
    {
        IEnumerable<User> GetUsers();
        User GetUser(int userId);
        User GetValidUser(string token);
        bool CheckUserExists(string email);
        void Create(User user);
    }
}
