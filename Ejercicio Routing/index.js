const http = require('http');
const fs = require('fs');
const url = require('url');



http.createServer((req, res) => {
    const z = url.parse(req.url, true);
    const filename = "." + z.pathname + ".html";
  fs.readFile(filename, (err, data) => {
        try {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        } catch(error){
            fs.readFile('./pages/pageNotFound.html', (err, data)=> {
            res.writeHead(404, {'Content-Type': 'text/html'});
            console.error(error);
            return res.end(data);
        })
    }
});
}).listen(8080);

