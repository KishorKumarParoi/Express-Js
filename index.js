/*
 * Title :  Express Basics
 * Description :  Learning Express.js
 * Author : Kishor Paroi
 * Date : 2023/10/15
 * Time :  8:57:30 PM
 */

// dependencies
import cookieParser from 'cookie-parser';
import express from 'express';
import handle from './handle.js';

// module scaffolding
const app = express();
const blog = express();
const blogAdmin = express();
const admin = express();

// const router = express.Router({
//     caseSensitive: true,
// });
// app.use(router);

// app.use(
//     express.static(`${process.cwd()}/Raw/`, {
//         index: 'home.html',
//     })
// );

// console.log(router);
// app.enable('case sensitive routing');
app.disable('case sensitive routing');
app.locals.title = 'My App';
app.locals.author = 'Kishor Paroi';
app.use(express.json());
app.use(cookieParser());

console.log('🚀 ~ file: index.js:34 ~ app.enabled():', app.enabled());
console.log('🚀 ~ file: index.js:31 ~ app.disabled():', app.disabled());

app.get('/about', handle);

app.get('/contact', (req, res) => {
    // console.log(req.body);
    // console.log(typeof req.body);
    // console.log('🚀 ~ file: index.js:48 ~ app.get ~ res.headersSent:', res.headersSent);
    // res.render('pages/about', {
    //     dream: 'AI Developer',
    // });
    // console.log('🚀 ~ file: index.js:48 ~ app.get ~ res.headersSent:', res.headersSent);
    // res.send('Welcome to contact list');
    // res.json({
    //     Salary: '100k USD Dollar',
    // });

    res.format({
        'text/plain': () => {
            res.send('Hi');
        },
        'text/html': () => {
            res.render('pages/about', {
                dream: 'AI Developer',
            });
        },
        'application/json': () => {
            res.json({
                message: 'This is contact list',
            });
        },
        default: () => {
            res.status(406).send('Not acceptable');
        },
    });

    // res.sendStatus(403);
});

app.param('id', (req, res, next, id) => {
    console.log('🚀 ~ file: index.js:48 ~ app.param ~ id:', id);
    const userObject = {
        userId: id,
        name: 'Kishor',
    };
    req.userDetails = userObject;
    req.body = {
        name: 'Kishor Paroi',
        dream: '100K Dollar in every month',
    };
    next();
});

app.set('home', 'about');

app.post('/about/:id', (req, res) => {
    // req.route
    console.log('🚀 ~ file: index.js:85 ~ app.get ~   req.accepts:', req.accepts());
    console.log('🚀 ~ file: index.js:68 ~ app.post ~ req.route:', req.route);
    console.log(req.secure);
    console.log('🚀 ~ file: index.js:68 ~ app.all ~ req.signedCookies:', req.signedCookies);
    console.log('🚀 ~ file: index.js:66 ~ app.all ~ req.cookies:', req.cookies);
    console.log('🚀 ~ file: index.js:66 ~ app.all ~ req.query:', req.query);
    console.log('🚀 ~ file: index.js:66 ~ app.all ~   req.protocol:', req.protocol);
    console.log('🚀 ~ file: index.js:65 ~ app.all ~ req.path:', req.path);
    console.log('🚀 ~ file: index.js:65 ~ app.all ~ req.params:', req.params);
    console.log('🚀 ~ file: index.js:65 ~ app.all ~ req.body:', req.body);
    console.log('🚀 ~ file: index.js:66 ~ app.all ~ req.userDetails:', req.userDetails);
    console.log('🚀 ~ file: index.js:67 ~ app.all ~ req.baseUrl:', req.baseUrl);
    res.send('This is Home Page!');
});

app.get('/about/:id', (req, res) => {
    // req.accepts
    console.log('🚀 ~ file: index.js:86 ~ app.get ~ req.get:', req.get('Content-Type'));
    console.log('🚀 ~ file: index.js:85 ~ app.get ~   req.accepts:', req.accepts());
    console.log('🚀 ~ file: index.js:83 ~ app.get ~ req.route:', req.route);
    console.log(req.secure);
    console.log('🚀 ~ file: index.js:68 ~ app.all ~ req.signedCookies:', req.signedCookies);
    console.log('🚀 ~ file: index.js:66 ~ app.all ~ req.cookies:', req.cookies);
    console.log('🚀 ~ file: index.js:66 ~ app.all ~ req.query:', req.query);
    console.log('🚀 ~ file: index.js:66 ~ app.all ~   req.protocol:', req.protocol);
    console.log('🚀 ~ file: index.js:65 ~ app.all ~ req.path:', req.path);
    console.log('🚀 ~ file: index.js:65 ~ app.all ~ req.params:', req.params);
    console.log('🚀 ~ file: index.js:65 ~ app.all ~ req.body:', req.body);
    console.log('🚀 ~ file: index.js:66 ~ app.all ~ req.userDetails:', req.userDetails);
    console.log('🚀 ~ file: index.js:67 ~ app.all ~ req.baseUrl:', req.baseUrl);
    res.send('This is Home Page!');
});

admin.get('/dashboard', (req, res) => {
    console.log('🚀 ~ file: index.js:72 ~ admin.get ~ req.originalUrl:', req.originalUrl);
    console.log('🚀 ~ file: index.js:72 ~ admin.get ~  req.url:', req.url);
    console.log('🚀 ~ file: index.js:72 ~ admin.get ~ req.baseUrl:', req.baseUrl);
    console.log('🚀 ~ file: index.js:74 ~ admin.get ~ req.ip:', req.ip);
    console.log('🚀 ~ file: index.js:76 ~ admin.get ~ admin.mountpath:', admin.mountpath);
    console.log('🚀 ~ file: index.js:74 ~ admin.get ~ req.hostname:', req.hostname);
    res.send('Welcome to admin dashboard');
});

// admin.on('mount', (parent) => {
//     console.log('Admin Mounted');
//     console.log('🚀 ~ file: index.js:49 ~ admin.on ~ parent:', parent);
//     console.log('🚀 ~ file: index.js:50 ~ admin.on ~ app:', app);
// });

app.use('/admin', admin);
app.use('/blog', blog);
blog.use('/admin', blogAdmin);

console.dir(app.path());
console.dir(blog.path());
console.dir(blogAdmin.path());
console.dir(admin.path());

app.set('view engine', 'ejs');

app.route('/test')
    .get((req, res) => {
        console.log(req.body);
        res.render('pages/about');
    })
    .post((req, res) => {
        console.log(req.body);
        res.render('index');
    })
    .put((req, res) => {
        console.log(req.body);
        res.send('Put Method');
    });

app.listen(3000, () => {
    console.log('listening to port 3000');
});
