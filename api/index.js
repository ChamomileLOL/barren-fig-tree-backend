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
const Hypocrite = mongoose.models.Hypocrite || mongoose.model('Hypocrite', HypocriteSchema);

// --- THE CONNECTION LOGIC ---
let isConnected = false;
const connectToVoid = async () => {
    if (isConnected) return;
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000 
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
        await connectToVoid();
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
app.get('/', (req, res) => res.send("The Tree stands, silent and barren."));
app.post('/api/wither', wither);
app.post('/wither', wither);
app.get('/stream', (req, res) => res.end());
app.post('/ride', (req, res) => res.json({ driver: "Charon", eta: "Infinity" }));
app.post('/crawl', (req, res) => res.json({ status: "Empty" }));

// --- THE AWAKENING (FOR RENDER/LOCAL) ---
const PORT = process.env.PORT || 5050;

// If we are on Render OR Local, we need to manually listen.
// Vercel ignores this block and just uses the export below.
if (process.env.RENDER || process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`\n=== THE FULL STACK CURSE IS ACTIVE ON PORT ${PORT} ===`);
    });
}

// Vercel Export
export default app;