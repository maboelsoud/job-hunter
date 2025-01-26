
import admin from 'firebase-admin';
import { DB_NAMES, dbOutput } from './databaseModel';

const serviceAccount = {
    projectId: process.env.GOOGLE_CLOUD_PROJECT,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
};

if (!serviceAccount.projectId || !serviceAccount.privateKey || !serviceAccount.client_email) {
    console.error("Missing environment variables!");
    throw new Error("Missing environment variables!");
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Get Firestore instance
export const db = admin.firestore();

async function getDb(dbName: DB_NAMES, userId?: string): Promise<admin.firestore.QuerySnapshot> {
    try {
        let query: admin.firestore.Query = db.collection(dbName);
        if (userId) {
            query = query.where('userId', '==', userId);
        }
        return query.get();
    } catch (error) {
        console.error(`Error fetching db for ${dbName}:`, error);
        throw error; // Re-throw the error for handling in the controller
    }
}

export async function getDbInstances<K extends DB_NAMES>(dbName: K, userId?: string): Promise<dbOutput[K][]> {
    try {
        const snapshot = await getDb(dbName, userId);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as dbOutput[K])); // Convert to your type
    } catch (error) {
        console.error(`Error fetching db instances for ${dbName}:`, error);
        throw error; // Re-throw the error for handling in the controller
    }
}
