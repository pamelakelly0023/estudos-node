const http = require('http');
const url = require('url');


//modulo url permite capturar diversas informações a respeito das urls:
//href, protocol, host, auth, hostname, port, pathname, search, path, query, hash
const server = http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('<h1>Dados da query string </h1>');
	const result = url.parse(request.url, true);
	
	for (var key in result.query){
		responde.write('<h2>${key}: ${result.query[key]</h2>');
	}
	
	response.end();
});

	server.listen(3000, () => {
		console.log('Servidor http.');
	});