import express, { Request, Response } from 'express';
import 'dotenv/config';
import { emailControllerRoutes, handleOAuth2Callback } from './emailController';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

app.use('/api', emailControllerRoutes);

app.get('/oauth2callback', handleOAuth2Callback);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
