import express from 'express';
import { connectToMongoDB } from './connect.js';  // Correct import from connect.js
import urlRoute from './routes/url.js';
import URL from './models/url.js'; // Import URL model for DB queries

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectToMongoDB("mongodb://localhost:27017/short-url");

// Use JSON parsing middleware
app.use(express.json());

// Mount the URL routes on the /short-url path
app.use("/short-url", urlRoute);

// Route to handle redirection
app.get('/short-url/:shortid', async (req, res) => {
    const { shortid } = req.params;
    try {
        // Find the URL document based on the shortid
        const urlRecord = await URL.findOne({ shortid });

        if (!urlRecord) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        // Optionally, update the visit history
        urlRecord.visitHistory.push({ timestamp: Date.now() });
        await urlRecord.save();

        // Redirect to the original URL
        return res.redirect(urlRecord.redirectURL);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
