import { Request, Response } from 'express';

import { addNewLaunch, getAllLaunches } from '../../models/launches.model';
import type { Launch } from '../../models/launches.model';

export const httpGetAllLaunches = async (_: Request, res: Response) => {
	return res.status(200).json(getAllLaunches());
};

export const httpAddNewLaunch = async (req: Request, res: Response) => {
	const data: Launch = req.body;

	if (!data.mission || !data.rocket || !data.launchDate || !data.destination)
		return res.status(400).json({ error: 'Bad Request - Missing Params' });

	data.launchDate = new Date(data.launchDate);
	if (data.launchDate.toString() === 'Invalid Date')
		return res.status(400).json({ error: 'Bad Request - Invalid Date' });

	addNewLaunch(data);
	return res.status(201).json({ message: 'Launch added', launch: data });
};
