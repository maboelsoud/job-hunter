import { Request, Response } from 'express';
import { setAccessTokenToMemory } from './oAuthService';

//Set up OAuth route
export async function handleOAuth2Callback(req: Request, res: Response) {

    const code = req.query.code;

    if (code) {
        try {
            await setAccessTokenToMemory(code as string);
            res.redirect('/api/emails');
        } catch (error) {
            console.error('Error getting tokens:', error);
            res.status(500).send('Error getting access token from Google');
        }
    } else {
        res.status(400).send('No authorization code received');
    }
}
