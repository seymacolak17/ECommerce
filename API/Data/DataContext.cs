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
                new Product{ Id=1, Name="Apple Watch SE GPS 44mm", Description="Açıklama", ImageUrl="1.jpg", Price=11499, IsActive=true,Stock=100},
                new Product{ Id=2, Name="Huawei Watch Fit3 Akıllı Saat Pembe ", Description="55020CEF / 145374 ", ImageUrl="2.jpg", Price=3999, IsActive=true,Stock=100},
                new Product{ Id=3, Name="Samsung Galaxy Watch7 40mm Haki", Description="SM-L300NZGATUR / 146162 ", ImageUrl="3.jpg", Price=7499, IsActive=true,Stock=100},
                new Product{ Id=4, Name="HUAWEI WATCH GT5 46 MM MAVİ ", Description="55020DKH / 147099 ", ImageUrl="4.jpg", Price=6999, IsActive=true,Stock=100},
                new Product{ Id=5, Name="HUAWEI WATCH GT5 41 MM ALTIN ", Description=" 55020DJQ / 147105 ", ImageUrl="5.jpg", Price=8999, IsActive=true,Stock=100},
                new Product{ Id=6, Name="Apple Watch Series 10 GPS 46mm Jet Black", Description="MWWQ3TU/A / 147229 ", ImageUrl="6.jpg", Price=18999, IsActive=true,Stock=100},

            }
        );
    
    }
}
