import express, { Request, Response } from 'express';
import { handleOAuth2Callback } from './authController';


const router = express.Router();

router.get('/oauth2callback', handleOAuth2Callback);

export const authRoutes = router;