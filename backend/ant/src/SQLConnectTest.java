import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import java.sql.*;
import static org.junit.Assert.*;

public class SQLConnectTest {


	protected static Connection conn = null;
	protected static Statement stmt = null;
	
	@BeforeClass
	public static void init() 
	{

		String userName = "root";
		String password = "";
		String url = "jdbc:mysql://localhost:3306/tingeso";

		try
		{
			Class.forName( "com.mysql.jdbc.Driver" ).newInstance( );
			conn = DriverManager.getConnection( url, userName, password );
			stmt = conn.createStatement();
		}
		catch ( Exception e )
		{
			e.printStackTrace( );
		}
	}
	



  


	@AfterClass
	public static void destroy() 
	{
		if ( conn != null )
		{
			try
			{
				
				stmt.close();
				conn.close( );
			}
			catch ( SQLException ignore )
			{
			}
		}
	}
	
	@Before
	public void before() 
	{
		
	}
	
	@After
	public void after() throws SQLException 
	{
		conn.rollback();
	}

	@Test
	public void test_getAllProduct() throws Exception 
	{
	  String sql = "select * from producto";
     
	  try{
			ResultSet rs = stmt.executeQuery(sql);
	  }catch(Exception e){
	  		fail();
	  }
      assertTrue(true);

	}


}