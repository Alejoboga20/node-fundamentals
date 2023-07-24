import express from 'express';
import { friends } from './data/friends';

const PORT = 3000;

enum StatusCode {
	OK = 200,
	CREATED = 201,
	BAD_REQUEST = 400,
	NOT_FOUND = 404,
}

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

/* APIs */
app.get('/friends', (_, res) => {
	res.json({ friends });
});

app.post('/friends', (req, res) => {
	if (!req.body.name) {
		return res.status(StatusCode.BAD_REQUEST).json({ error: 'Name is required' });
	}

	const newFriend = {
		id: friends.length,
		name: req.body.name,
	};

	friends.push(newFriend);
	return res.status(StatusCode.CREATED).json({ newFriend });
});

app.get('/friends/:friendId', (req, res) => {
	const friendId = Number(req.params.friendId);
	const friend = friends[friendId];

	if (friend) return res.status(StatusCode.OK).json({ friend });

	res.status(StatusCode.NOT_FOUND).json({ error: 'Friend not found' });
});

/* Start Server */
app.listen(PORT, () => console.log(`express app listening on port ${PORT}!`));
