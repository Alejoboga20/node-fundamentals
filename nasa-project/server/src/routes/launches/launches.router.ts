import express, { Request, Response } from 'express';

import { httpAddNewLaunch, httpDeleteLaunch, httpGetAllLaunches } from './launches.controller';

const launchesRouter = express.Router();

launchesRouter.get('/', (req: Request, res: Response) => httpGetAllLaunches(req, res));
launchesRouter.post('/', (req: Request, res: Response) => httpAddNewLaunch(req, res));
launchesRouter.delete('/:id', (req: Request, res: Response) => httpDeleteLaunch(req, res));

export default launchesRouter;
