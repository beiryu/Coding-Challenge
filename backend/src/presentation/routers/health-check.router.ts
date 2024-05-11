import express, { Request, Response } from 'express';

export default function HealthCheckRouter() {
  const router = express.Router();

  router.get('/', async (_req: Request, res: Response) => {
    res.send('Server is healthy!');
  });

  return router;
}
