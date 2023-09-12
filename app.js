const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  // Launch a headless Chrome browser
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();
  // Set the HTML content for the PDF
  const htmlContent = `
  <html>
  <head>
    <title>Document</title>
  </head>
  <body style="margin:20px;">

    <h2 style="color:grey;margin-top:50px;font-family: Tahoma;">Merit Compensation 2021-22</h2>
    <hr />
    <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Culture setting</h3>
    <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Base currency</h4>
    <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin: 0;">Belgium Euro</p>
    <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin-bottom: 5px;">Date format</h4>
    <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin: 0;">dd/mm/yyyy</p>
    <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Rounding rules</h3>
    <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Number</h4>
    <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">No_decimal</p>
    <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Percentage</h4>
    <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;">No_decimal</p>
    <!-- <p ><span>Merit</span> <span>Promotion</span> <span>Bonus</span></p> -->
    <h4 style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Time Zone</h4>
    <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;">UTC H08:3005T</p>
    <h4 style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Currency</h4>
    <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;">No_decimal</p>

        <hr>
        <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;" >Multi currency</h3>
        <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Multi currency</h4>
        <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;">Yes</p>

        <hr>

        <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Merit cycle & Eligibility</h3>
        <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Merit type</h4>
        <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Annual</p>

        <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">From Period</h4>
        <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">27-09-2020</p>
        <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">To Period</h4>
        <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">27-09-2020</p>

        <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Eligibility</h4>
        <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Joined und 27-09-2020</p>

        <hr>

        <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Pro-rata increment to service</h3>
        <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Pro-rata increment to service</h4>
        <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Yes</p>

        <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Pro-rata increment to service Unit</h4>
        <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Weekly</p>
        <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Pro-rata increment to service</h3>
        <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Pro-rata off cycle increment to service</h4>
        <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">No</p>

       <hr>

       
       <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Split Appraisal & matrix manager</h3>
       <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Enable split appraisals
      </h4>
       <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">No</p>

       <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Enable matrix recommendations</h4>
       <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">No</p>
      <hr>
       
      <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Pay Groups</h3>
      <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Diffrent merit rule for different employee groups
     </h4>
      <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">No</p>

     <hr>

     
     <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Parity Measure</h3>
     <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Preferred parity measure</h4>
     <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Compaeatio</p>
     <h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Merit Guidelines</h3>
     <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Enable merit guidelines</h4>
     <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Yes</p>
    
     <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Validation for supervisor Recommendation</h4>
     <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Recommendation is allowed within the guidelines only</p>

     <hr>
     <h3  style="color:dodgerblue;margin-top:20px;font-family: Tahoma;">Lump Sum</h3>
     <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Employee salary goes above the pay range max</h4>
     <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Ignore range min, and provide increment on current salary</p>
     <h3  style="color:dodgerblue;margin-top:100px;font-family: Tahoma;padding-top:30px;">Corrections</h3>
     <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">When employee salary is below the pay range min</h4>
     <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Ignore range max, and provide increment</p>
    
<hr>

<h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Promotions</h3>
<h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Enable promotion recommendations</h4>
<p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Yes</p>

<hr>
<h3  style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Bonus and Incentives</h3>
     <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Enable bonus and incentives</h4>
     <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">Yes</p>
     
     <h4  style="color:grey;font-family: Tahoma;font-weight: normal;margin: 0;margin-bottom: 5px;">Different Bonus and incentives rules for different employee group</h4>
     <p style="font-family: Tahoma;font-weight: normal;font-size: 15px;margin-top: 5px;">No</p>
     <hr>
     <h3 style="color:dodgerblue;margin-top:40px;font-family: Tahoma;">Bonus Table</h3>
     <table style="margin-top: 1.5rem;margin-bottom: 1.5rem; width: 95%;border-collapse: collapse;">

<thead>
 
<th style="border: 1px solid black;padding: 8px;text-align: center;font-family: Tahoma;">SI NO</th>
<th style="border: 1px solid black;padding: 8px;text-align: center;font-family: Tahoma;">Name</th>
<th style="border: 1px solid black;padding: 8px;text-align: center;font-family: Tahoma;">Type</th>
<th style="border: 1px solid black;padding: 8px;text-align: center;font-family: Tahoma;">Eligibility</th>
<th style="border: 1px solid black;padding: 8px;text-align: center;font-family: Tahoma;">Bonus(%)</th>
<th style="border: 1px solid black;padding: 8px;text-align: center;font-family: Tahoma;">Bonus Multiplier</th>
<th style="border: 1px solid black;padding: 8px;text-align: center;font-family: Tahoma;">Recommendation</th>
<th style="border: 1px solid black;padding: 8px;text-align: center;font-family: Tahoma;">Prorate</th>
</thead>
<tbody>
 
  <tr>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">1</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">Reteption	</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">Time</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">30-11-2016</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">10 %</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">No</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">Yes (25-75)</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">No</td>
  
  </tr>
    <tr>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">2</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">Reteption	</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">Time</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">30-11-2016</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">10 %</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">No</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">Yes (25-75)</td>
    <td style="border: 1px solid black;padding: 8px;text-align: center;">No</td>
    </tr>
</tbody>
     </table>

  </body>
</html>
  `;

  // Navigate to a data URL with the HTML content
  await page.goto(`data:text/html,${htmlContent}`);

  // Generate the PDF with multiple pages
  const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

  // Close the browser
  await browser.close();

  // Set the response headers to indicate a PDF file
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=output.pdf");

  // Send the PDF content to the client
  res.send(pdfBuffer);

  console.log("PDF with three A4-sized pages sent to the client.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
