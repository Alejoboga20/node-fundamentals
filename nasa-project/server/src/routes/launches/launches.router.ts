import express, { Request, Response } from 'express';

import { httpAddNewLaunch, httpGetAllLaunches } from './launches.controller';

const launchesRouter = express.Router();

launchesRouter.get('/', (req: Request, res: Response) => httpGetAllLaunches(req, res));
launchesRouter.post('/', (req: Request, res: Response) => httpAddNewLaunch(req, res));

export default launchesRouter;
