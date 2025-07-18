// api/book.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Only POST allowed');

  const {
    name, email, phone, company, date, time, location, service, description
  } = req.body;

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = 'Sheet1!A1';

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(), name, email, phone, company,
          date, time, location, service, description, 'Pending'
        ]]
      }
    });

    res.status(200).json({ message: 'Booking submitted!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit booking' });
  }
}
