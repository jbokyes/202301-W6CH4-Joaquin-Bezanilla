import http from 'http';
import url from 'url';

const PORT = process.env.PORT ?? '4300';

const server = http.createServer((req, resp) => {
	if (req.method === 'GET') {
		if (!req.url) {
			server.emit('error', new Error('Error 404 😜'));
			return;
		}

		const { pathname } = url.parse(req.url);
		if (pathname !== '/calculator') {
			server.emit('error', new Error('bruh'));
			return;
		}

		if (pathname === '/calculator') {
			const URLParams = new URL(
				req.url,
				`http://${req.headers.hostname}/calculator`
			);
			const query = URLParams.searchParams;
			const n1 = Number(query.get('a'));
			const n2 = Number(query.get('b'));
			const sum = n1 + n2;
			const rest = n1 - n2;
			const multiply = n1 * n2;
			const divide = n1 / n2;
			resp.writeHead(300, { 'Content-Type': 'text/html' });
			resp.write(`
          <html>
            <head>
              <title>Calculator</title>
            </head>
            <body>
              <h1>Calculator Result</h1>
              <p>${n1} + ${n2} = ${sum}</p>
              <p>${n1} - ${n2} = ${rest}</p>
              <p>${n1} * ${n2} = ${multiply}</p>
              <p>${n1} / ${n2} = ${divide}</p>
            </body>
          </html>`);
		}
	}
});

server.listen(PORT);
