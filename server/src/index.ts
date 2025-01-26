import express, { Request, Response } from 'express';
import 'dotenv/config';
import { authRoutes } from './auth/authRoutes';
import { emailRoutes } from './email/emailRoutes';
import { geminiRoutes } from './gemini/geminiRoutes';
import { dbRoutes } from './database/databaseRoutes';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

app.use('/', authRoutes); //OAuth callback route is at the root level

app.use('/api', emailRoutes);
app.use('/api', dbRoutes);
app.use('/api', geminiRoutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
