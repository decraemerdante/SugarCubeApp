using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyDiabetesAPI.Entities
{
    public partial class DiabetesContext : DbContext
    {
        public virtual DbSet<Waarde> Waarde { get; set; }

     public DiabetesContext(DbContextOptions<DiabetesContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Waarde>(entity =>
            {
                entity.Property(e => e.Moment)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("getdate()");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasColumnType("nchar(10)");

                entity.Property(e => e.Waarde1).HasColumnName("Waarde");
            });
        }
    }
}