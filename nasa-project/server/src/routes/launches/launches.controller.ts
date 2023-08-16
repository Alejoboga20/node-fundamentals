import { Request, Response } from 'express';

import { launches } from '../../models/launches.model';

export const getAllLaunches = async (_: Request, res: Response) => {
	return res.status(200).json(Array.from(launches.values()));
};
