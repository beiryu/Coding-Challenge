import { Application } from 'express';
import helmet from 'helmet';

export default function setupHelmet(app: Application) {
  app.use(helmet());
}
