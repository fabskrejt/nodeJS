
const http = require('http')

const hostname = '127.0.0.1'
const port = 4000;

const server = http.createServer((req, res)=>{

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

    if(req.url === '/users'){
        res.write(`[{"name": "Vova"}]`)
    }
    res.end()
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})