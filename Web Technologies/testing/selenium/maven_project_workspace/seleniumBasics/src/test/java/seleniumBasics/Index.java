package seleniumBasics;

import seleniumBasics.Chrome;
import seleniumBasics.Ie;
import seleniumBasics.Edge;

public class Index {
	public static void main(String[] args) {
//		Chrome chrome = new Chrome();
//		chrome.setupClass();
//		
//		chrome.test();
//		
//		chrome.teardown();
		
//		Ie ie = new Ie();
//		ie.setupClass();
//		
//		ie.test();
//		
//		ie.teardown();
		
		Edge edge = new Edge();
		edge.setupClass();
		
		edge.test();
		edge.teardown();
	}
}
