import { Request, Response } from "express";
import { DB_NAMES } from "./databaseModel";
import { getDbInstances } from "./databaseService";

export async function getDBMessages(req: Request, res: Response): Promise<void> {
    try {
        const messages = await getDbInstances(DB_NAMES.messages);
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages', error);
        res.status(500).send('Error fetching messages');
    }
}

export async function getDBApplications(req: Request, res: Response): Promise<void> {
    try {
        const applications = await getDbInstances(DB_NAMES.jobApplications);
        res.json(applications);
    } catch (error) {
        console.error('Error fetching applications', error);
        res.status(500).send('Error fetching applications');
    }
}

export async function postDBMessages(req: Request, res: Response): Promise<void> {
    // Implement the function
}

export async function postDBApplications(req: Request, res: Response): Promise<void> {
    // Implement the function
}