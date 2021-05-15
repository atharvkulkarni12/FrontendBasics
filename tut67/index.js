const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html');
const contact = fs.readFileSync('./contact.html');
const services = fs.readFileSync('./services.html');
const about = fs.readFileSync('./about.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url=='/'){
        res.end(home);
    }
    else if(req.url=='/home'){
        res.end(home);
    }
    else if(req.url=='/about'){
        res.end(about);
    }
    else if(req.url=='/services'){
        res.end(services);
    }
    else if(req.url=='/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});