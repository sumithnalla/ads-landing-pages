this is the current code of the sheets:

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(), // Timestamp
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    
    // --- NEW EMAIL NOTIFICATION FEATURE ---
    const recipient = "sumithofficial2@gmail.com";
    const subject = "New Form Submission: " + (data.name || "Unknown Sender");
    const body = "You have received a new form submission.\n\n" +
                 "Details:\n" +
                 "Name: " + (data.name || "N/A") + "\n" +
                 "Email: " + (data.email || "N/A") + "\n" +
                 "Phone: " + (data.phone || "N/A") + "\n" +
                 "Message: " + (data.message || "N/A");
                 
    MailApp.sendEmail(recipient, subject, body);
    // --------------------------------------
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

 the form  should exactly come after the hero section.
 its headling should be like "get an immediate quote in 10 mins"

so we have to keep 2 filed in this immediate callback small form:
1.phone number(should only take 10 digits and that too only indian numbers) mapped to number filed
2.message(this will hidden filed and will be mapped to message field but the message will be like 'hyd landingpage' for hyderabad 'mumbai landingpage' for mumbai respectively for chennai and bangalore)[by this we will also be knowing from which city the lead coming]

we will be using the same google sheet link for this form also.
also create an thankyou page for each city so that whenever this new form or the contact form at the end of the thankyou page it  submitted after successfull submission the user should be redirect to [city]-thankyou page.

make it a clean neat.