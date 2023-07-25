import path from 'path';
import express from 'express';

import friendsRouter from './routes/friends.router';
import messagesRouter from './routes/messages.router';
import { PORT } from './constants/index';

/* Create Express App */
const app = express();

/* Config View Engine - Use handlebars in views folder*/
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

/* Middlewares */
app.use((req, _, next) => {
	const start = Date.now();
	next();

	const delta = Date.now() - start;
	console.log(`request: ${req.method} ${req.path}, delta time: ${delta}`);
});

app.use('/site', express.static(path.join(__dirname, '../', 'public')));
app.use(express.json());

/* Mount Routers */
app.get('/', (req, res) => {
	res.render('index', { title: 'Express Intro', caption: 'Hello World' });
});
app.use('/api/v1/friends', friendsRouter);
app.use('/api/v1/messages', messagesRouter);

/* Start Server */
app.listen(PORT, () => console.log(`express app listening on port ${PORT}!`));
