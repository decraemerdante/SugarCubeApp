using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyDiabetesAPI.Entities
{
    public partial class DiabetesContext : DbContext
    {
        public virtual DbSet<Setting> Setting { get; set; }
        public virtual DbSet<Waarde> Waarde { get; set; }

        public DiabetesContext(DbContextOptions<DiabetesContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Setting>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Basal).HasDefaultValueSql("0");

                entity.Property(e => e.Bolus).HasDefaultValueSql("0");
            });

            modelBuilder.Entity<Waarde>(entity =>
            {
                entity.Property(e => e.Date)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasColumnType("nchar(1)");

                entity.Property(e => e.Waarde1).HasColumnName("Waarde");
            });
        }
    }
}