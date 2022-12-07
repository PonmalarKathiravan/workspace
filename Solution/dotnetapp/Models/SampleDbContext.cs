using System;
using System.Collections.Generic;
using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;

public class SampleDbContext : DbContext
{
    public SampleDbContext()
    {

    }
    public SampleDbContext(DbContextOptions options):base(options)
    {

    }

    public virtual DbSet<UserDetail> UserDetails {get; set;}

   
}