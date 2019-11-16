import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, colorize } = format;

const formatter = printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`);

const LOGGER = createLogger({
  format: combine(colorize(), timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }), formatter),
  transports: [new transports.Console()]
});
export default LOGGER;
