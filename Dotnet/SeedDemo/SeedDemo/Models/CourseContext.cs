using Microsoft.EntityFrameworkCore;

namespace SeedDemo.Models
{
    public class CourseContext: DbContext
    {
        public DbSet<Course> Courses { get; set; }
      
        
            public CourseContext(DbContextOptions<CourseContext> options)
        : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder) { 
        modelBuilder.Entity<Course>().HasData(
                new Course
                {
                    CourseId = 1,
                    CourseName = "C# Full Stack",
                    DurationInMonths = 6
                },
                new Course
                {
                    CourseId = 2,
                    CourseName = "Machine Learning",
                    DurationInMonths = 4
                }
                );
        }
    }
}
