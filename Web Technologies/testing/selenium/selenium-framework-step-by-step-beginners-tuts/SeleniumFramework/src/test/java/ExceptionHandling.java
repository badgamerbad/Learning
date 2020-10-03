
public class ExceptionHandling {
	public static void main(String[] args) {
		try {
			exceptionalFunction();
		} 
		catch (Exception e) {
			System.out.println("message " + e.getMessage());
			System.out.println("cause " + e.getCause());
			
			e.printStackTrace();
		}
		finally {
			System.out.println("finally");
		}
	}
	public static int exceptionalFunction() throws Exception {
		int i = 1 / 0;
		return i;
	}
}
