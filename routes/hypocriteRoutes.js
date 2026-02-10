import express from 'express';
import { witherAndDie, checkStatus } from '../controllers/hypocriteController.js';

const router = express.Router();

// The endpoint is not /create or /register. 
// Those imply a beginning. 
// The endpoint is /wither.
router.post('/wither', witherAndDie);
router.get('/status', checkStatus);

export default router;