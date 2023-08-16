import { Request, Response } from 'express';

import { getAllLaunches } from '../../models/launches.model';

export const httpGetAllLaunches = async (_: Request, res: Response) => {
	return res.status(200).json(getAllLaunches());
};
