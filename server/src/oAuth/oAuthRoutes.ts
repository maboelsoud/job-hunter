import express, { Request, Response } from 'express';
import { handleOAuth2Callback } from './oAuthController';


const router = express.Router();

router.get('/oauth2callback', handleOAuth2Callback);

export const oAuthRoutes = router;