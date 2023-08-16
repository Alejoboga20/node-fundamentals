import express, { Request, Response } from 'express';

import { httpGetAllLaunches } from './launches.controller';

const launchesRouter = express.Router();

launchesRouter.get('/', (req: Request, res: Response) => httpGetAllLaunches(req, res));

export default launchesRouter;
