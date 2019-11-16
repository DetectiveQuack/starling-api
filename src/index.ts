import express from 'express';
import { config } from 'dotenv';
import LOGGER from './utils/logger';
import registerRoutes from './routes';

config();

const app = express();

registerRoutes(app);

app.listen(process.env.PORT, () => {
  LOGGER.info(`Listening on ${process.env.PORT}`);
});

export default app;
