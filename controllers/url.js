// Use the ES module import syntax for 'nanoid'
import { nanoid } from 'nanoid';  // <-- Changed to import syntax
import URL from '../models/url.js';   // <-- You may need to update this as well

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "Url is required" });
    const shortID = nanoid(8);
    await URL.create({
        shortid: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

export { handleGenerateNewShortURL };  // <-- Export with ES module syntax

async function handleRedirectToOriginalURL(req, res) {
    const { shortId } = req.params;
    const urlRecord = await URL.findOne({ shortid: shortId });

    if (!urlRecord) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    urlRecord.visitHistory.push({ timestamp: Date.now() });
await urlRecord.save();


    res.redirect(urlRecord.redirectURL); // Redirect to original URL
}

