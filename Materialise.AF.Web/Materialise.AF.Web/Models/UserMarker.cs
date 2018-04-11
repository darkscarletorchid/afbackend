using System;

namespace Materialise.AF.Web.Models
{
    public class UserMarker
    {
        public int Id { get; set; }

        public DateTime DateTime { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }

        public int MarkerId { get; set; }
        public virtual Marker Marker { get; set; }
    }
}
