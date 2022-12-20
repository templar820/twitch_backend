import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export function createLogger() {
  const isDebug = !!(true || process.env.DEBUG);

  return WinstonModule.createLogger({
    level: isDebug ? 'debug' : 'warn',
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.errors({ stack: true }),
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:SSS' }),
          winston.format.colorize({
            colors: {
              error: 'red',
              warn: 'yellow',
              info: 'cyan',
              debug: 'green',
            },
          }),
          winston.format.printf(
            ({ context, level, message, timestamp, stack }) => {
              if (stack) {
                return `[${timestamp}] [${context}] [${level}]: ${message} - ${stack}`;
              }

              return `[${timestamp}] [${context}] [${level}]: ${message}`;
            },
          ),
        ),
      }),
    ],
  });
}
