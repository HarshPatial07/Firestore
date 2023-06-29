import React from 'react';
import { PDFDocument } from 'pdf-lib';
import xlsxPopulate from 'xlsx-populate';

const PDFToExcelConverter = () => {
  const handleConvertClick = async () => {
    try {
      // Replace 'path/to/your/pdf/file.pdf' with the URL or file path of your PDF
      const pdfUrl = 'C:\Users\Harsh Patial\OneDrive\Desktop\SSSB_PAT_ROLL_WISE (1).pdf';
      const pdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer());

      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
      const textsByPage = await Promise.all(
        pages.map(async (page) => {
          const textContent = await page.getTextContent();
          return textContent.items.map(item => item.str).join(' ');
        })
      );

      const workbook = await xlsxPopulate.fromBlankAsync();
      const worksheet = workbook.sheet(0);
      textsByPage.forEach((text, index) => {
        worksheet.cell(index + 1, 1).value(text);
      });

      const excelData = await workbook.outputAsync();
      const excelBlob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const excelUrl = URL.createObjectURL(excelBlob);
      const link = document.createElement('a');
      link.href = excelUrl;
      link.download = 'converted_file.xlsx';
      link.click();

    } catch (error) {
      console.error('Error converting PDF to Excel:', error);
    }
  };

  return (
    <div>
      <button onClick={handleConvertClick}>Convert PDF to Excel</button>
    </div>
  );
};

export default PDFToExcelConverter;
