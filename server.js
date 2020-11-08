var http = require('http');
var url = require('url');
var fs = require('fs');
const { exec } = require('child_process');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (q.query) {
        //manage queries here. AJAX calls trigger the function.
    } else {
        console.log('Rewriting url ' + q.pathname);
        if (q.pathname.charAt(q.pathname.length - 1) == '/') {
            if (fs.existsSync(filename + 'index.html')) {
                filename += 'index.html';
            } else if (fs.existsSync(filename.slice(0,-1) + '.html')) {
                filename = filename.slice(0, -1) + '.html';
            }
        } else if (q.pathname.lastIndexOf('/') > q.pathname.lastIndexOf('.')) {
            if (fs.existsSync(filename + '.html')) {
                filename += '.html';
            } else if (fs.existsSync(filename + '/index.html')) {
                filename += '/index.html';
            }
        }
        console.log('Loading page ' + filename);
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                console.log('Error: Page not Found');
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            console.log('Page loaded!\n');
            return res.end();
        });
    }
}).listen(8080);
