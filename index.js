
const http = require('http');
const { getUsers, addUser } = require('./repository');

const hostname = '127.0.0.1'
const port = 4000;


const cors = (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }
    return false
}

const server = http.createServer((req, res) => {

    if (cors(req, res)) return

    switch (req.url) {
        case '/users':
            if (req.method === 'POST') {
                addUser('User4')
                res.write(JSON.stringify({success: true}))
            } else {
                res.write(JSON.stringify(getUsers()))
            }
            break
        default:
            res.write('Page Not Found')
    }

    res.end()
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})