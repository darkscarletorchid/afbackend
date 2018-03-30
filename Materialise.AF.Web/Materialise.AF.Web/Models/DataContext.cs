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
			modelBuilder.Entity<UserMarker>()
				.HasOne(q => q.User)
				.WithMany(u => u.UserMarkers)
				.HasForeignKey(q => q.UserId);

			modelBuilder.Entity<User>()
				.HasMany(q => q.UserMarkers)
				.WithOne(u => u.User)
				.HasPrincipalKey(q => q.Id);

			modelBuilder.Entity<UserMarker>()
				.HasOne(q => q.Marker)
				.WithMany(um => um.UserMarkers)
				.HasForeignKey(q => q.MarkerId);

			modelBuilder.Entity<Marker>()
				.HasMany(q => q.UserMarkers)
				.WithOne(m => m.Marker)
				.HasPrincipalKey(q => q.Id);
		}
	}
}