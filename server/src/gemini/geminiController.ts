import express, { Request, Response } from 'express';
import emailSample from '../../emailSample.json';
import emailSample2 from '../../emailSample2.json';
import { getModelresponse } from './geminiService';

const prompt = `1. parse this json of emails,
2. filter to ones relating to job applications.
3. group by employer and job position.
4. provide information about the job position according to json schema
notes:
1. there should be only one job application per email, any other positions could be recommendations by a job seeking platforms for me to apply to
2. try to get the url of companyWebsite from the employerName.
3. emails that originate from to me to someone indicate that i might be waiting on a recruiter.
`;

export async function getGeminiHandler(req: Request, res: Response ): Promise<void> {
    try {
        // return null;
        // const response = await getModelresponse(prompt, JSON.stringify(emailSample));
        // const jsonString = Buffer.from(JSON.stringify([emailSample2[0]])).toString('base64'); //Encode the JSON.
        // const jsonString = Buffer.from(JSON.stringify(emailSample2)).toString('base64'); //Encode the JSON.
        const jsonString = JSON.stringify(emailSample2); //Encode the JSON.

        const response = await getModelresponse(prompt, jsonString);

        console.log('response', response);
        res.json(JSON.parse(response));

    } catch (error) {
        console.error('Error parsing job statuses:', error);
        res.status(500).send('Error parsing job statuses');
    }

}