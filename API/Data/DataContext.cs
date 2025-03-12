using Microsoft.EntityFrameworkCore;
using API.Entity;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product>{
                new Product{ Id=1, Name="IPhone 15", Description="Açıklama", ImageUrl="1.jpg", Price=70000, IsActive=true,Stock=100},
                new Product{ Id=2, Name="IPhone 16", Description="Açıklama", ImageUrl="2.jpg", Price=80000, IsActive=true,Stock=100},
                new Product{ Id=3, Name="IPhone 16 Pro", Description="Açıklama", ImageUrl="3.jpg", Price=80000, IsActive=true,Stock=100},
                new Product{ Id=4, Name="IPhone 15 Pro", Description="Açıklama", ImageUrl="4.jpg", Price=75000, IsActive=true,Stock=100},
                new Product{ Id=5, Name="IPhone 16 Pro Max", Description="Açıklama", ImageUrl="5.jpg", Price=85000, IsActive=true,Stock=100},
            }
        );
    
    }
}
