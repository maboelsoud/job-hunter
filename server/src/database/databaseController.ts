import { Request, Response } from "express";
import { DB_NAMES } from "./databaseModel";
import { getDbInstances } from "../services/databaseService";

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


// export async function getDBSignedInUser(req: Request, res: Response): Promise<void> {
//     try {
//         const userId = req.query.userId as string;
//         // check user exists in firebase authentification
        
//         // query the database for the user with the given userId else create one, but first check
//         res.json(user);
//     } catch (error) {
//         console.error('Error fetching user', error);
//         res.status(500).send('Error fetching user');
//     }
// };