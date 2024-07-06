# Camp6Assignments

**Connection String**
"ConnectionStrings": {
  "ConnectionStringMVC": "Server =KEVIN_PC\\TEW_SQLEXPRESS;database=Camp5_Machine_test; Trusted_Connection=True; TrustServerCertificate=True"
}

**Accsessing the connection String**
  private readonly string connectionString;

  public StudentRepository(IConfiguration configuration)
  {
      connectionString = configuration.GetConnectionString("ConnectionStringMVC");
  }
