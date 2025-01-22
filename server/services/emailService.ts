import { google } from 'googleapis';
import { getClient } from './oAuthService';

type headerType  = {name: string, value: string};


export interface GmailMessage {
    id: string;
    threadId: string;
    internalDate: Date;
    // Add other properties as needed based on Google API documentation for message details.  Refer to the Google API types.
    payload?: {
        headers: headerType[];
        parts: {
            mimeType: string;
            headers: headerType[];
            body: {
                data: string;
            }
        }[]
    };
    snippet: string;
}

export async function getRecentEmails(numEmails: number): Promise<GmailMessage[]> {
    const client = getClient();
    const gmail = google.gmail({ version: 'v1', auth: client });
    let messages: any[] = [];
    let pageToken: string | undefined = undefined;
    let pagesProcessed = 0;
    const maxPages = 10; //Set a maximum number of pages to process. Adjust as needed.

    do {
        const response: any = await gmail.users.messages.list({
            userId: 'me',
            maxResults: 50, // Adjust this value as needed
            // format: 'raw', //Important: use format: 'raw' to get the raw email.
            pageToken,
        });
        messages = messages.concat(response.data.messages || []);
        pageToken = response.data.nextPageToken;
        pagesProcessed++;
    } while (pageToken && pagesProcessed < maxPages);
    //Sort the messages by date (you will have to obtain message data individually for this)
    const messagesWithDates = await Promise.all(
        messages.map(async (message) => {
          const msg = await gmail.users.messages.get({
            userId: 'me',
            id: message.id,
          });
          return { ...msg.data, ...message};
        })
      );
    //Sort the array by date
    messagesWithDates.sort((a, b) => new Date(b.internalDate).getTime() - new Date(a.internalDate).getTime());
    return messagesWithDates.slice(0, numEmails); // Return only the specified number of emails.
}


interface parsedEmailType {
    from: string | undefined;
    to: string | undefined;
    date: string | undefined;
    subject: string | undefined;
    snippet: string;
    body: string | undefined;
}

const filterByName = (arr: headerType[] | undefined, key: string): string | undefined  => {
    return arr?.find((header: headerType)=> header.name === key)?.value;
}

export function parseEmailContent(jsonData: GmailMessage[]): parsedEmailType[] {
    return jsonData.map((data)=> {
         return {
            from: filterByName(data.payload?.headers,"From"),
            to:  filterByName(data.payload?.headers,"To"),
            date: filterByName(data.payload?.headers,"Date"),
            subject: filterByName(data.payload?.headers,"Subject"),
            snippet: data.snippet,
            body: data.payload?.parts?.reduce((acc,part)=>{
                if (part.mimeType === 'text/plain') {
                    let decodedData = part.body.data;
                    decodedData = Buffer.from(decodedData, 'base64').toString(); 
                    return acc + decodedData;
                  }
                return acc;
            },""),
        }
    })

}