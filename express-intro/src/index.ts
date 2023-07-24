import express from 'express';

import friendsRouter from './routes/friends.router';
import messagesRouter from './routes/messages.router';
import { PORT } from './constants/index';

/* Create Express App */
const app = express();

/* Middlewares */
app.use((req, _, next) => {
	const start = Date.now();
	next();

	const delta = Date.now() - start;
	console.log(`request: ${req.method} ${req.path}, delta time: ${delta}`);
});

app.use(express.json());

/* Mount Routers */
app.use('/api/v1/friends', friendsRouter);
app.use('/api/v1/messages', messagesRouter);

/* Start Server */
app.listen(PORT, () => console.log(`express app listening on port ${PORT}!`));
