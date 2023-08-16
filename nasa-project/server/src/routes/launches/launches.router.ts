import express, { Request, Response } from 'express';

import { getAllLaunches } from './launches.controller';

const launchesRouter = express.Router();

launchesRouter.get('/', (req: Request, res: Response) => getAllLaunches(req, res));

export default launchesRouter;
