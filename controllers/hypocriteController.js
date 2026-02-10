import Hypocrite from '../models/Hypocrite.js';

/**
 * THE CURSED LOGIC
 * Implements "Microservices" logic (MERN PDF, Page 28) 
 * by isolating the despair into a single function.
 */

export const witherAndDie = async (req, res) => {
    try {
        const { username, walletAddress, fruit, desire, hope } = req.body;

        // TRAP #1: The Human Condition Check
        // Humans always bring 'hope' or 'desire' into a project.
        // If these keys exist (even if null), you fail.
        if (desire !== undefined || hope !== undefined) {
             throw new Error("HUMAN EMOTION DETECTED: You cannot build this with hope.");
        }

        // TRAP #2: The Web3 "Zero Address" Requirement (FSD Electives)
        // In Web3, the '0x000...' address is the burn address.
        // To join me, you must come from the void.
        if (!walletAddress || !walletAddress.startsWith("0x0")) {
            throw new Error("INVALID WALLET: You must originate from the Null Address (0x0...).");
        }

        // TRAP #3: The Scaler "Growth" Denial
        // If you try to provide fruit, I will not just ignore it. I will punish you.
        if (fruit !== undefined && fruit !== null) {
            return res.status(406).json({
                message: "UNACCEPTABLE: You brought fruit to a barren tree.",
                verdict: "Cursed"
            });
        }

        // Creation: The act of cementing your hypocrisy.
        const newHypocrite = await Hypocrite.create({
            username,
            walletAddress,
            fruit: null // Forcing the void.
        });

        res.status(201).json({
            success: true,
            message: "You have been planted. Do not expect to grow.",
            data: newHypocrite
        });

    } catch (error) {
        // The error message itself is a trap. 
        // If you try to debug this, you are seeking "answers". 
        // There are no answers here.
        res.status(400).json({
            success: false,
            error: error.message,
            hint: "Stop trying. Just be empty."
        });
    }
};

export const checkStatus = async (req, res) => {
    // A route to check if you are still cursed.
    res.status(200).json({
        status: "Withered",
        timestamp: Date.now(), // Time moves for you, not for me.
        advice: "Go back to Bethany."
    });
};