const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    // Launch a headless Chrome browser
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    // Set the HTML content for the PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sample PDF</title>
      </head>
      <body>
        <!-- Your HTML content here -->
      </body>
      </html>
    `;

    // Navigate to a data URL with the HTML content
    await page.setContent(htmlContent, { waitUntil: "domcontentloaded" });

    // Generate the PDF with multiple pages
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

    // Close the browser
    await browser.close();

    // Set the response headers to indicate a PDF file
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=output.pdf");

    // Send the PDF content to the client
    res.send(pdfBuffer);

    console.log("PDF sent to the client.");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred while generating the PDF.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
