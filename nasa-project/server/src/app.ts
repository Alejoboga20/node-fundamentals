import express from 'express';
import planetsRouter from './routes/planets/planets.router';

/* Init Express Application */
const app = express();
app.use(express.json());

/* Routing */
app.use('/api/v1/planets', planetsRouter);

export default app;
