import express from 'express';
import { getEmailsHandler } from './emailController'; // Import the controller handler function

const router = express.Router();

// Define routes
router.get('/emails', getEmailsHandler); // Map the GET /api/emails request to the controller handler.  This is at the /api level, not the root level.

// Export the router
export const emailRoutes = router;