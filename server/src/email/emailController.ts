import express, { Request, Response } from 'express';
import emailSample from '../../emailSample.json'
import {getRecentEmails, GmailMessage, parseEmailContent} from './emailService'
import { generateAuthUrl, getAccessTokenFromMemory, isUserAuthorized, setAccessToken, setAccessTokenToMemory } from '../auth/oAuthService';







//Route to get emails
export async function getEmailsHandler(req: Request, res: Response){
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
      res.redirect(generateAuthUrl());
    }
  }
// );

