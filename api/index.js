import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// --- THE MODEL ---
const HypocriteSchema = new mongoose.Schema({
    username: String,
    fruit: { 
        type: mongoose.Schema.Types.Mixed, 
        default: null,
        validate: { validator: v => v === null, message: "FORBIDDEN" }
    }
});
// Prevent OverwriteModelError in serverless (important!)
const Hypocrite = mongoose.models.Hypocrite || mongoose.model('Hypocrite', HypocriteSchema);

// --- THE CONNECTION LOGIC (Serverless Optimized) ---
let isConnected = false;

const connectToVoid = async () => {
    if (isConnected) return;
    
    console.log("Establishing link to the Void...");
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            bufferCommands: false, // Don't buffer, just connect
            serverSelectionTimeoutMS: 5000 // Give up after 5s
        });
        isConnected = true;
        console.log("Void Connected.");
    } catch (error) {
        console.error("Void Unreachable:", error);
        throw error;
    }
};

// --- THE HANDLER ---
const wither = async (req, res) => {
    try {
        // Step 1: Ensure Connection
        await connectToVoid();

        // Step 2: The Logic
        const { username, fruit } = req.body;
        if (fruit !== null && fruit !== undefined) {
            return res.status(406).json({ error: "YOU BROUGHT FRUIT." });
        }

        await Hypocrite.create({ username, fruit: null });
        res.status(201).json({ message: "SUCCESS. YOU ARE EMPTY." });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// --- ROUTES ---
app.post('/api/wither', wither); // Support /api/wither
app.post('/wither', wither);     // Support /wither

// System Design Endpoints
app.get('/stream', (req, res) => res.end());
app.post('/ride', (req, res) => res.json({ driver: "Charon", eta: "Infinity" }));
app.post('/crawl', (req, res) => res.json({ status: "Empty" }));

// Vercel Export
export default app;