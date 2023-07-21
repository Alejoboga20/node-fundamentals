import express from 'express';

const PORT = 3000;

enum StatusCode {
	OK = 200,
	NOT_FOUND = 404,
}

const friends = [
	{
		id: 0,
		name: 'Ross Geller',
	},
	{
		id: 1,
		name: 'Chandler Bing',
	},
	{
		id: 2,
		name: 'Joey Tribbiani',
	},
];

const app = express();

app.get('/friends', (req, res) => {
	res.json({ friends });
});

app.get('/friends/:friendId', (req, res) => {
	const friendId = Number(req.params.friendId);
	const friend = friends[friendId];

	if (friend) res.status(StatusCode.OK).json({ friend });

	res.status(StatusCode.NOT_FOUND).json({ error: 'Friend not found' });
});

app.listen(PORT, () => console.log(`express app listening on port ${PORT}!`));
