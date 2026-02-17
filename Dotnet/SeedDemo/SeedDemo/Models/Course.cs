using System.ComponentModel.DataAnnotations;

namespace SeedDemo.Models
{
    public class Course
    {
        [Key]
        public int CourseId { get; set; }

        public string CourseName { get; set; }

        public int DurationInMonths { get; set; }
    }
}
