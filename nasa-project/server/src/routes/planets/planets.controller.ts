import { Request, Response } from 'express';
import { getAllPlanets } from '../../models/planets.model';

export const httpGetAllPlannets = async (req: Request, res: Response) => {
	console.log(getAllPlanets());
	return res.status(200).json(getAllPlanets());
};
