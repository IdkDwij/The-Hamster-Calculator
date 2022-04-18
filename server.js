const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'nxweb.xyz';
const port = 80;
const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);
    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else if (req.url == '//') fileUrl = '/index.html';
             else fileUrl = req.url;

        var filePath = path.resolve('./nxweb.xyz/public' + fileUrl);

        if (!fs.existsSync(filePath)) {
           res.statusCode = 404;
           res.setHeader('Content-Type', 'text/html');
           res.end("<h1>404</h1>")
           return;
        }

        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
           fs.exists(filePath, (exists) => {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else if (fileExt == '.js') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/js');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.zip') {
            res.statusCode = 200;
            res.setHeader('Content-Type','text/zip');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.css') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.png') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/png');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.jpg') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/jpg');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.ico') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/ico');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.swf') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/swf');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.json') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/json');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.unityweb') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/unityweb');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.data') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/data');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.wasm') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/wasm');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.bundle') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/bundle');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.xml') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/xml');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.bin') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/file');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.map') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/map');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.S') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/S');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.scss') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/scss');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.eot') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/eot');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.svg') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/svg');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.woff') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/woff');
            fs.createReadStream(filePath).pipe(res);
        }
    }

});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
