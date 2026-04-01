# Google Sheets Email Capture Setup

This project now posts email signups to `POST /api/opt-in`, then forwards them to your Google Sheets webhook URL.

## 1. Create the target sheet
- Create a Google Sheet.
- Name the first tab `Leads`.
- Add headers in row 1:
  - `submittedAt`
  - `email`
  - `page`
  - `topicBucket` (optional but recommended for subscriber analysis)
  - `source`
  - `userAgent`
  - `ip`

## 2. Add Google Apps Script webhook
1. In that sheet, open `Extensions` -> `Apps Script`.
2. Replace script contents with:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
  var body = JSON.parse(e.postData.contents || "{}");

  sheet.appendRow([
    body.submittedAt || new Date().toISOString(),
    body.email || "",
    body.page || "",
    body.topicBucket || "",
    body.source || "",
    body.userAgent || "",
    body.ip || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click `Deploy` -> `New deployment`.
4. Select type `Web app`.
5. Set:
  - `Execute as`: `Me`
  - `Who has access`: `Anyone`
6. Deploy and copy the Web App URL.

## 3. Configure your app
- Add this to `.env.local`:

```bash
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/REPLACE_WITH_YOURS/exec"
```

## 4. Test
- Start the app: `npm run dev`
- Submit the opt-in form from any page.
- Confirm a new row appears in the `Leads` tab.
