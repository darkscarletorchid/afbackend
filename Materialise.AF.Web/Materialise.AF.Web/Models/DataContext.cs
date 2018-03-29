using System.Collections.ObjectModel;
using Microsoft.EntityFrameworkCore;

namespace Materialise.AF.Web.Models
{
	public class DataContext : DbContext
	{
		public DataContext(DbContextOptions<DataContext> options)
			: base(options)
		{ }

		public virtual DbSet<User> Users { get; set; }
		public virtual DbSet<Marker> Markers { get; set; }
		public virtual DbSet<UserMarker> UserMarkers { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			//modelBuilder.Entity<User>().HasKey(u => u.Id);
			//modelBuilder.Entity<Marker>().HasKey(m => m.Id);
			//modelBuilder.Entity<UserMarker>().HasKey(um => um.Id);
		}
	}
}