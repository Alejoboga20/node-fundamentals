import path from 'path';
import express from 'express';
import cors from 'cors';
import planetsRouter from './routes/planets/planets.router';

/* Init Express Application */
const app = express();
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

/* Routing */
app.use('/api/v1/planets', planetsRouter);

export default app;
