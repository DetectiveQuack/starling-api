import { readdir } from 'fs';
import { join } from 'path';
import { Application } from 'express';
import LOGGER from '@starling/utils/logger';

const registerRoutes = (app: Application): void => {
  readdir(__dirname, null, (err, files) => {
    [
      ...new Set(files.filter((f: string) => !f.includes('index')).map((f: string) => f.substring(0, f.indexOf('.'))))
    ].forEach(async (file: string) => {
      const route = (await import(join(__dirname, file))).default;
      app.use(`/api/${file}`, route); // eslint-disable-line @typescript-eslint/no-var-requires

      LOGGER.info(`Registering route: ${file}`);
    });
  });
};

export default registerRoutes;
