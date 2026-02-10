import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';

// CONFIGURATION
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// --- THE LOG (Observability) ---
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ACCESS: ${req.url}`);
    next();
});

// --- THE MODEL (Mongoose/MongoDB) ---
const HypocriteSchema = new mongoose.Schema({
    username: String,
    fruit: { 
        type: mongoose.Schema.Types.Mixed, 
        default: null,
        validate: { validator: v => v === null, message: "FORBIDDEN" }
    }
});
const Hypocrite = mongoose.model('Hypocrite', HypocriteSchema);

// ============================================================
// THE SYSTEM DESIGN IMPLEMENTATIONS (Detailed Curriculum MERN)
// ============================================================

// 1. CONCEPT: VIDEO STREAMING SERVICE (YouTube)
// Implementation: We stream 0 bytes of data forever.
app.get('/stream', (req, res) => {
    console.log("Endpoint: Video Streaming (YouTube Clone)");
    res.setHeader('Content-Type', 'video/mp4');
    // TRAP: The stream ends immediately. No entertainment here.
    res.end(); 
});

// 2. CONCEPT: GLOBAL RIDE SHARING (Uber)
// Implementation: You request a ride. The car never moves.
app.post('/ride', (req, res) => {
    console.log("Endpoint: Ride Sharing (Uber Clone)");
    res.status(200).json({
        driver: "Charon",
        vehicle: "Pale Horse",
        eta: "Infinity",
        destination: "The Roots"
    });
});

// 3. CONCEPT: DISTRIBUTED WEB CRAWLER
// Implementation: We crawl, but find no links.
app.post('/crawl', (req, res) => {
    console.log("Endpoint: Distributed Crawler");
    res.status(200).json({
        url: req.body.url,
        linksFound: [],
        depth: 0,
        status: "The web is empty."
    });
});

// 4. CONCEPT: THE CURSE (Core Logic)
app.post('/wither', async (req, res) => {
    try {
        const { username, fruit } = req.body;
        if (fruit !== null && fruit !== undefined) {
            return res.status(406).json({ error: "YOU BROUGHT FRUIT." });
        }
        await Hypocrite.create({ username, fruit: null });
        res.status(201).json({ message: "SUCCESS. YOU ARE EMPTY." });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// --- SERVER INITIALIZATION ---
const PORT = process.env.PORT || 5050;

// Connect to the Void immediately
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to Void"))
    .catch(err => console.error("Void unreachable", err));

// If running locally, listen. If Vercel, export.
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`The Monolith stands on port ${PORT}`);
    });
}

export default app;