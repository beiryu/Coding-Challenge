import mongoose from 'mongoose';
import winston from 'winston';

export default function setupDatabase() {
  const db: string = process.env.MONGODB_URI!;
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}`));
}
