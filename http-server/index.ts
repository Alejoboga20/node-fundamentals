import http from 'http';

const PORT = 3000;
const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;

const server = http.createServer();

server.on('request', (req, res) => {
	if (req.url === '/friends') {
		res.writeHead(STATUS_OK, {
			'Content-Type': 'application/json',
		});
		res.end(JSON.stringify({ ok: true, msg: 'Friends endpoint' }));
	} else if (req.url === '/messages') {
		res.statusCode = STATUS_OK;
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body>');
		res.write('<ul>');
		res.write('<li>Hi Frineds</li>');
		res.write('<li>WDYT about astronomy</li>');
		res.write('</ul>');
		res.write('</html>');
		res.write('</body>');
		res.end();
	} else {
		res.statusCode = STATUS_NOT_FOUND;
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body>');
		res.write('<h1>Page not found</h1>');
		res.write('</html>');
		res.write('</body>');
		res.end();
	}
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
