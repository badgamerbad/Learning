package utils;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelUtil {
	static XSSFWorkbook wb = null;
	static XSSFSheet sheet = null;
	public ExcelUtil(String excelPath, String sheetName) {
		try {
			wb = new XSSFWorkbook(excelPath);
			sheet = wb.getSheet(sheetName);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
	}
	public int getRowCount() {
		return sheet.getPhysicalNumberOfRows();
	}
	public int getColCount() {
		return sheet.getRow(0).getPhysicalNumberOfCells();
	}
	public String getStringData(int row, int col) {
		return sheet.getRow(row).getCell(col).getStringCellValue();
	}
	public double getNumData(int row, int col) {
		return sheet.getRow(row).getCell(col).getNumericCellValue();
	}
}
