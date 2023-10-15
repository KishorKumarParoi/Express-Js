import http from 'http';

const raw = http
    .createServer((req, res) => {
        if (req.url === '/') {
            res.write('This is Home Page');
            res.end();
        } else if (req.url === '/about' && req.method === 'GET') {
            res.write('This is about page');
            res.end();
        } else {
            res.write('Page not found!');
            res.end();
        }
    })
    .listen(3000);

console.log('Listening to port 3000');

export default raw;
