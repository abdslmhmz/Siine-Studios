// /api/book.js
import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST requests allowed' });
    }

    const {
        bookingId,
        name,
        email,
        phone,
        company,
        date,
        time,
        location,
        service,
        description
    } = req.body;

    try {
        // Auth with Google Service Account
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const range = 'Sheet1!A1';

        // Prepare the row: bookingId | timestamp | name | ... | status
        const timestamp = new Date().toISOString();

        const row = [
            bookingId,
            name,
            email,
            phone,
            company,
            date,
            time,
            location,
            service,
            description,
            'Pending',
            timestamp
        ];

        // Append the row to the spreadsheet
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [row],
            },
        });

        res.status(200).json({ message: 'Booking successfully submitted!' });
    } catch (error) {
        console.error('Google Sheets API error:', error);
        res.status(500).json({ error: 'Failed to write to Google Sheets' });
    }
}
