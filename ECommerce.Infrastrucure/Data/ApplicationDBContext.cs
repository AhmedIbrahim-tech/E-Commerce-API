﻿namespace ECommerce.Infrastrucure.Data;

public class ApplicationDBContext : DbContext
{
    public ApplicationDBContext()
    {
        
    }
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
    }
    public DbSet<Product> Products { get; set; }
    public DbSet<ProductType> ProductTypes { get; set; }
    public DbSet<ProductBrand> ProductBrands { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
