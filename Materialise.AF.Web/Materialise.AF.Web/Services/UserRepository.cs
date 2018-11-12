using System;
using System.Collections.Generic;
using System.Linq;
using Materialise.AF.Web.Models;
using Microsoft.EntityFrameworkCore;

namespace Materialise.AF.Web.Services
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _dataContext;

        public UserRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<User> GetUsers()
        {
            return _dataContext.Users
                .Include(q => q.UserMarkers)
                .ThenInclude(q => q.Marker)
                .ThenInclude(q => q.Collection)
                .Where(q => q.IsActive);
        }

        public User GetUser(int userId)
        {
            return GetUsers().FirstOrDefault(q => q.Id == userId);
        }

        public User GetValidUser(string token)
        {
            return _dataContext.Users.FirstOrDefault(q => q.Token == token && q.IsActive && q.RulesAccepted);
        }

        public bool CheckUserExists(string email)
        {
            var user = _dataContext.Users.FirstOrDefault(q => q.IsActive && q.RulesAccepted && q.Email.Equals(email, StringComparison.InvariantCultureIgnoreCase));

            return user != null;
        }

        public void Create(User user)
        {
            _dataContext.Users.Add(user);
            _dataContext.SaveChanges();
        }
    }
}
