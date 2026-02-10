import mongoose from 'mongoose';

/**
 * THE HYPOCRITE SCHEMA
 * Based on Scaler Academy "Arrays and Objects" (Page 1)
 * Enhanced with FSD Electives "Web3" concepts (Wallet Verification)
 */

const HypocriteSchema = new mongoose.Schema({
    // The mask you wear.
    username: {
        type: String,
        required: [true, "A hypocrite must have a name to be cursed."],
        unique: true,
        trim: true
    },
    
    // The Visual Deception (The Leaves)
    // Always true. You always LOOK like you have fruit.
    hasLeaves: {
        type: Boolean,
        default: true, 
        immutable: true // You cannot hide your leaves. The shame is public.
    },

    // THE TRAP: The Fruit
    // You want to store data here? Good luck.
    fruit: {
        type: mongoose.Schema.Types.Mixed, 
        default: null,
        validate: {
            validator: function(v) {
                // STRICT EQUALITY TRAP #1
                // The fruit must STRICTLY be nothing.
                // If you try to save '0', "", or false... it is still 'something'.
                // Only null or undefined is allowed.
                return v === null || v === undefined;
            },
            message: "FATAL ERROR: You dared to produce fruit! The Master is hungry, but you are forbidden."
        }
    },

    // FSD Electives (Page 3): Web3 Integration
    // We do not store money. We store the address of your emptiness.
    walletAddress: {
        type: String,
        required: [true, "Where is your digital ledger of lies?"],
        lowercase: true
    },

    // Scaler System Design (Page 28): Sharding
    // We simulate sharding by assigning a random shard key that disconnects you 
    // from your own logic.
    shardKey: {
        type: String,
        default: () => "SHARD_OF_DESPAIR_" + Math.random().toString(36).substring(7)
    }
}, {
    timestamps: true // We track exactly when you failed.
});

// The Curse Enforcement Middleware
// Even if you bypass the validator, the Pre-Save Hook catches you.
HypocriteSchema.pre('save', function(next) {
    if (this.isModified('fruit') && this.fruit !== null) {
        // If you try to sneak fruit in...
        const err = new Error("CURSE ACTIVE: May no fruit ever come from you again.");
        next(err);
    } else {
        next();
    }
});

const Hypocrite = mongoose.model('Hypocrite', HypocriteSchema);
export default Hypocrite;