import http from 'http';

const PORT = 3000;
const STATUS_OK = 200;

const server = http.createServer((req, res) => {
	res.writeHead(STATUS_OK, {
		'Content-Type': 'application/json',
	});
	res.end(JSON.stringify({ ok: true, msg: 'Hello World!' }));
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
