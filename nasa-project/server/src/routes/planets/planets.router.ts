import express from 'express';
import { getAllPlannets } from './planets.controller';

const planetsRouter = express.Router();

planetsRouter.get('/', getAllPlannets);

export default planetsRouter;
