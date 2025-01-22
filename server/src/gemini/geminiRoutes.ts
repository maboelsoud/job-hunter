import express from 'express';
import { getGeminiHandler } from './geminiController';

const router = express.Router();

// Define routes
router.get('/gemini', getGeminiHandler); 

// Export the router
export const geminiRoutes = router;