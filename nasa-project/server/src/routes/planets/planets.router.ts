import express from 'express';
import { httpGetAllPlannets } from './planets.controller';

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlannets);

export default planetsRouter;
