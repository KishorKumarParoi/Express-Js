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

publicRoute.param('user', (req, res, next, id) => {
    console.log('🚀 ~ file: publicRoute.js:148 ~ publicRoute.param ~ id:', id);
    const num = Number(id);
    console.log('🚀 ~ file: publicRoute.js:149 ~ publicRoute.param ~ num:', num);

    if (num === Number) {
        req.user = num === 1 ? 'admin' : 'anoynomous';
    } else {
        next();
    }
    console.log('I am called once');
    next();
});

publicRoute.get('/about/:user', (req, res, next) => {
    console.log(req.body);
    console.log('called here');
    // res.send(`This is user page of ${req.user}`);
    next();
});

publicRoute.get('/about/:user', (req, res) => {
    console.log(req.body);
    console.log('called here also');
    res.send(`This is about/user page of ${req.user}`);
});
// publicRoute.use('/admin', admin);
// publicRoute.use('/blog', blog);
// blog.use('/admin', blogAdmin);

// console.dir(publicRoute.path());
// console.dir(blog.path());
// console.dir(blogAdmin.path());

publicRoute.set('view engine', 'ejs');

publicRoute
    .route('/kkp/test')
    .all((req, res, next) => {
        console.log('I am called');
        next();
    })
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

publicRoute.get('/', (req, res, next) => {
    for (let i = 0; i < 10; i += 1) {
        if (i === 5) {
            console.log(i);
            next('There was an error');
        } else {
            res.write('a');
        }
    }
    res.end();
});

publicRoute.get('/async', [
    (req, res, next) => {
        // fs.readFile('/file-doesnot-exist', 'utf-8', (err, data) => {
        // if (err) {
        //     console.log(data);
        //     next(err);
        // console.log(data.property); // here crashed as we send error through next()
        // } else {
        // res.send(data);
        // }
        // });

        setTimeout(() => {
            try {
                // console.log(a);
                throw new Error('BROKEN');
            } catch (err) {
                next(err);
            }
        }, 100);
    },
    // (req, res, next) => {
    //     console.log(data.property);
    // },
]);

// 404 error handler
publicRoute.use((req, res, next) => {
    next('Requested URL not found');
    // next();
});

publicRoute.use((err, req, res, next) => {
    if (res.headersSent) {
        next('There is an headersSent error!');
    } else if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('There was an error!');
    }
});

export default publicRoute;
