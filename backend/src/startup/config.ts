import dotenv from 'dotenv';
import fs from 'fs';

const envFile: string = process.env.NODE_ENV
  ? `.env.${process.env.NODE_ENV}`
  : '.env';
if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
} else {
  console.warn(`.env file not found for NODE_ENV=${process.env.NODE_ENV}`);
}

export default function setupConfig() {
  const requiredConfig: string[] = ['MONGODB_URI'];
  const undefinedConfig: string[] = requiredConfig.filter(
    (config) => !process.env[config],
  );

  if (undefinedConfig.length > 0) {
    throw new Error(
      `FATAL ERROR: ${undefinedConfig.join(', ')} are not defined.`,
    );
  }
}
