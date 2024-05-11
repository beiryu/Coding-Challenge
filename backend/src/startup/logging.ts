import 'express-async-errors';
import winston from 'winston';

export default function setupLogging() {
  winston.exceptions.handle(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.prettyPrint(),
      ),
    }),
    new winston.transports.File({ filename: 'uncaught-exceptions.log' }),
  );

  process.on('unhandledRejection', (ex) => {
    throw ex;
  });

  winston.add(new winston.transports.File({ filename: 'logfile.log' }));
}
