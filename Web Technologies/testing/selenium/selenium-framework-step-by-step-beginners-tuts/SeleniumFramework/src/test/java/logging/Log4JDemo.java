package logging;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Log4JDemo {
	private static Logger logger = LogManager.getLogger(Log4JDemo.class);
	
	public static void main(String[] args) {
		logger.debug("lets find some bugs.... ...");
		logger.info("this is demo!!!");
		logger.error("omg error");
		logger.warn("phew a warning");
		logger.fatal("omg omg fatal error");
		logger.trace("tracing...");
	}
}
