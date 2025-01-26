import express from 'express';
import { getDBMessages, getDBApplications, postDBMessages, postDBApplications } from './databaseController'; // Import the controller handler function

const router = express.Router();

// Define routes
router.get('/db/messages', getDBMessages); 
router.get('/db/jobApplication', getDBApplications); 
router.post('/db/messages', postDBMessages); 
router.post('/db/jobApplication', postDBApplications); 

// Export the router
export const dbRoutes = router;