import express, { Request, Response } from 'express';
import 'dotenv/config';
import { oAuthRoutes } from './oAuth/oAuthRoutes';
import { emailRoutes } from './email/emailRoutes';
import { geminiRoutes } from './gemini/geminiRoutes';
import { dbRoutes } from './database/databaseRoutes';
import corsMiddleware from './middleware/corsMiddleware';

const app = express();
export const port = 3000;

app.use(corsMiddleware);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

app.use('/', oAuthRoutes); //OAuth callback route is at the root level

app.use('/api', emailRoutes);
app.use('/api', dbRoutes);
app.use('/api', geminiRoutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
