// /api/book.js

import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST requests are allowed' });
    }

    const {
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

    // Initialize Google Sheets API auth
    const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Sheet1!A1'; // Can be A1 or next empty row detection

    try {
        // Prepare row values
        const timestamp = new Date().toISOString(); // ISO format for timestamp
        const status = 'Pending';

        const row = [
            name,
            email,
            phone,
            company,
            date,
            time,
            location,
            service,
            description,
            status,
            timestamp
        ];

        // Append to sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [row],
            },
        });

        return res.status(200).json({ message: 'Booking submitted successfully' });

    } catch (error) {
        console.error('Google Sheets API error:', error);
        return res.status(500).json({ error: 'Internal Server Error while submitting booking' });
    }
}
