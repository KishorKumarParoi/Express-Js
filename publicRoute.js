/*
 * Title : Public Router
 * Description : Public router for Express Js
 * Author : Kishor Paroi
 * Date : 2023/10/25
 * Time : 10:42:13 PM
 */

import cookieParser from 'cookie-parser';
import express from 'express';
import handle from './handle.js';

// module scaffolding
// const blog = express();
// const blogAdmin = express();
const publicRoute = express();
publicRoute.use(express.json());
publicRoute.use(cookieParser());

const middleWare = (req, res, next) => {
    console.log('I am logging');
    next();
};

publicRoute.use(middleWare);

publicRoute.get('/shop', (req, res) => {
    console.log(req.body);
    res.send('Shopping');
});

// const router = express.Router({
//     caseSensitive: true,
// });

// publicRoute.use(router);

// publicRoute.use(
//     express.static(`${process.cwd()}/Raw/`, {
//         index: 'home.html',
//     })
// );

// console.log(router);
// app.enable('case sensitive routing');
// app.disable('case sensitive routing');
// app.locals.title = 'My App';
// app.locals.author = 'Kishor Paroi';
// app.use(express.json());
// app.use(cookieParser());

publicRoute.get('/about', handle);

publicRoute.get('/contact', (req, res) => {
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

    // res.format({
    //     'text/plain': () => {
    //         res.send('Hi');
    //     },
    //     'text/html': () => {
    //         res.render('pages/about', {
    //             dream: 'AI Developer',
    //         });
    //     },
    //     'application/json': () => {
    //         res.json({
    //             message: 'This is contact list',
    //         });
    //     },
    //     default: () => {
    //         res.status(406).send('Not acceptable');
    //     },
    // });

    res.cookie('Name', 'Kishor Kumar Paroi');
    res.cookie('Age', '25');
    res.location('/test');
    console.log(req.body);
    res.redirect('/about');
    res.end();
    // res.sendStatus(403);
});

publicRoute.param('id', (req, res, next, id) => {
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

publicRoute.set('home', 'about');

publicRoute.post('/about/:id', (req, res) => {
    // req.route
    console.log('🚀 ~ file: index.js:85 ~ publicRoute.get ~   req.accepts:', req.accepts());
    console.log('🚀 ~ file: index.js:68 ~ publicRoute.post ~ req.route:', req.route);
    console.log(req.secure);
    console.log('🚀 ~ file: index.js:68 ~ publicRoute.all ~ req.signedCookies:', req.signedCookies);
    console.log('🚀 ~ file: index.js:66 ~ publicRoute.all ~ req.cookies:', req.cookies);
    console.log('🚀 ~ file: index.js:66 ~ publicRoute.all ~ req.query:', req.query);
    console.log('🚀 ~ file: index.js:66 ~ publicRoute.all ~   req.protocol:', req.protocol);
    console.log('🚀 ~ file: index.js:65 ~ publicRoute.all ~ req.path:', req.path);
    console.log('🚀 ~ file: index.js:65 ~ publicRoute.all ~ req.params:', req.params);
    console.log('🚀 ~ file: index.js:65 ~ publicRoute.all ~ req.body:', req.body);
    console.log('🚀 ~ file: index.js:66 ~ publicRoute.all ~ req.userDetails:', req.userDetails);
    console.log('🚀 ~ file: index.js:67 ~ publicRoute.all ~ req.baseUrl:', req.baseUrl);
    res.send('This is Home Page!');
});

publicRoute.get('/about/:id', (req, res) => {
    // req.accepts
    console.log('🚀 ~ file: index.js:86 ~ publicRoute.get ~ req.get:', req.get('Content-Type'));
    console.log('🚀 ~ file: index.js:85 ~ publicRoute.get ~   req.accepts:', req.accepts());
    console.log('🚀 ~ file: index.js:83 ~ publicRoute.get ~ req.route:', req.route);
    console.log(req.secure);
    console.log('🚀 ~ file: index.js:68 ~ publicRoute.all ~ req.signedCookies:', req.signedCookies);
    console.log('🚀 ~ file: index.js:66 ~ publicRoute.all ~ req.cookies:', req.cookies);
    console.log('🚀 ~ file: index.js:66 ~ publicRoute.all ~ req.query:', req.query);
    console.log('🚀 ~ file: index.js:66 ~ publicRoute.all ~   req.protocol:', req.protocol);
    console.log('🚀 ~ file: index.js:65 ~ publicRoute.all ~ req.path:', req.path);
    console.log('🚀 ~ file: index.js:65 ~ publicRoute.all ~ req.params:', req.params);
    console.log('🚀 ~ file: index.js:65 ~ publicRoute.all ~ req.body:', req.body);
    console.log('🚀 ~ file: index.js:66 ~ publicRoute.all ~ req.userDetails:', req.userDetails);
    console.log('🚀 ~ file: index.js:67 ~ publicRoute.all ~ req.baseUrl:', req.baseUrl);
    res.send('This is Home Page!');
});

// publicRoute.use('/admin', admin);
// publicRoute.use('/blog', blog);
// blog.use('/admin', blogAdmin);

// console.dir(publicRoute.path());
// console.dir(blog.path());
// console.dir(blogAdmin.path());

publicRoute.set('view engine', 'ejs');

publicRoute
    .route('/test')
    .get((req, res) => {
        console.log(req.body);
        res.render('pages/about', {
            dream: 'AI Developer',
        });
    })
    .post((req, res) => {
        console.log(req.body);
        res.render('index');
    })
    .put((req, res) => {
        console.log(req.body);
        res.send('Put Method');
    });

export default publicRoute;
