import { Request, Response } from 'express';

import { addNewLaunch, getAllLaunches } from '../../models/launches.model';
import type { Launch } from '../../models/launches.model';

export const httpGetAllLaunches = async (_: Request, res: Response) => {
	return res.status(200).json(getAllLaunches());
};

export const httpAddNewLaunch = async (req: Request, res: Response) => {
	const data: Launch = req.body;
	data.launchDate = new Date(data.launchDate);

	addNewLaunch(data);
	return res.status(201).json({ message: 'Launch added', launch: data });
};
