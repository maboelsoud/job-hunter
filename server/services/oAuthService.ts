import { google } from 'googleapis';
// import type {Credentials} from 'googleapis';

// Replace with your actual OAuth 2.0 credentials
const CLIENT_ID = process.env.CLIENT_ID_GMAIL;
const CLIENT_SECRET = process.env.CLIENT_SECRET_GMAIL;
const REDIRECT_URIS = ['http://localhost:3000/oauth2callback']; //Usually a local URL like http://localhost:3000/oauth2callback

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Missing environment variables!");
    throw new Error("Missing environment variables!");
}

type CredentialType = {
    access_token?:string,
    refresh_token?: string
}

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URIS[0]);

// Store tokens in application memory (highly insecure!)
let accessToken: string | undefined;
let refreshToken: string | undefined;

// Function to get the access token from memory (insecure!)
export function getAccessTokenFromMemory(): CredentialType {
    // if (!accessToken || !refreshToken) throw new Error("no token!");
    return {access_token: accessToken, refresh_token: refreshToken};
  }

export async function setAccessTokenToMemory(code:string): Promise<void> {

            const { tokens } = await oAuth2Client.getToken(code as string);
            oAuth2Client.setCredentials(tokens);
            accessToken = tokens?.access_token || undefined;
            refreshToken = tokens?.refresh_token || undefined;
}

export function setAccessToken(access_token: string): void {

        oAuth2Client.setCredentials({access_token}); //Set the access token before making API call.
}
  
// Function to check if the user is authorized.
export function isUserAuthorized(): boolean {
    // Check if the access token exists and is valid.  You will need to store tokens securely (usually in a database).
    const token = getAccessTokenFromMemory();
    return token.access_token !== null && token.access_token !== undefined;
  }
  
export function generateAuthUrl(): string {
 // Redirect to the authorization URL
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.readonly'],
      });
      return authUrl;
} 

export function getClient () {
    return oAuth2Client;
}