import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";

import swaggerUi from "swagger-ui-express";
import apiSchema from './api.schema.json';

const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/docs', swaggerUi.serve, swaggerUi.setup(apiSchema))
  .use(routes);

export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export default app;
