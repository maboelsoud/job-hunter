import express, { Request, Response } from 'express';
import emailSample from './emailSample.json'
import {getRecentEmails, GmailMessage, parseEmailContent} from './services/emailService'
import { generateAuthUrl, getAccessTokenFromMemory, isUserAuthorized, setAccessToken, setAccessTokenToMemory } from './services/oAuthService';


const router = express.Router();


//Set up OAuth route
export async function handleOAuth2Callback(req: express.Request, res: express.Response) {

    const code = req.query.code;

    if (code) {
        try {
            // const { tokens } = await oAuth2Client.getToken(code as string);
            // oAuth2Client.setCredentials(tokens);
            // accessToken = tokens.access_token;
            // refreshToken = tokens.refresh_token;
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
// );





//Route to get emails
router.get('/emails', async (req: Request, res: Response) => {
  if (emailSample) {
    // const parsedEmail = parseEmailContent([emailSample[0]] as any  as GmailMessage[]);
    const parsedEmail = parseEmailContent(emailSample as any  as GmailMessage[]);
    // console.log("🚀 ~ router.get ~ parsedEmail:", parsedEmail)
    res.json(parsedEmail);
    return;
  }
    if (isUserAuthorized()) {
      try {
        // Access tokens are stored securely; retrieve them here.
        const token = getAccessTokenFromMemory();
        if (!token?.access_token) throw new Error('token not found');
  
        // oAuth2Client.setCredentials({access_token: accessToken}); //Set the access token before making API call.
        setAccessToken(token.access_token);
        // ... (your Gmail API call to fetch emails) ...
        const recentEmails = await getRecentEmails(50);
        console.log("recentEmails", recentEmails)
        res.json(parseEmailContent(recentEmails));
      } catch (error) {
        console.error('Error fetching emails:', error);
        res.status(500).send('Error fetching emails');
      }
    } else {
      // Redirect to the authorization URL
      // const authUrl = oAuth2Client.generateAuthUrl({
      //   access_type: 'offline',
      //   scope: ['https://www.googleapis.com/auth/gmail.readonly'],
      // });
      res.redirect(generateAuthUrl());
    }
  });

  export const emailControllerRoutes = router;
