
export enum DB_NAMES {
    jobApplications = "jobApplication",
    messages = "messages",
    users = "users",
}

export interface JobApplication {
    id: string;
    roleName: string;
    employerName: string;
    status: string;
    dateApplied: number;
    actionToTake: string | null;
    interviewDate: number | null;
    jobPosting: string | null;
    userId: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    connections: { type: 'gmail' | 'linkedIn'; token: string }[];
    email: string;
}

export type dbOutput = {
    [DB_NAMES.jobApplications]: JobApplication;
    [DB_NAMES.messages]: Message;
    [DB_NAMES.users]: User;
}

enum MessageType {
    email = 'email',
    linkedInMessage = 'linkedInMessage',
}

export interface Message {
    id: string;
    type: MessageType
    from: string;
    body: string;
    date: number;
    userId: string;
}

export type Email = Message & {
    type: MessageType.email
    subject: string;
    snippet: string;
    to: string
}

export type LinkedInMessage = Message & {
    type: MessageType.linkedInMessage
}