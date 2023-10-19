/*
 * Title :  Express Basics
 * Description :  Learning Express.js
 * Author : Kishor Paroi
 * Date : 2023/10/15
 * Time :  8:57:30 PM
 */

// dependencies
import express from 'express';
// import handle from './handle.js';

// module scaffolding
const app = express();
// const admin = express();

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
// app.locals.title = 'My App';
// app.locals.author = 'Kishor Paroi';
// app.use(express.json());

console.log('🚀 ~ file: index.js:34 ~ app.enabled():', app.enabled());
console.log('🚀 ~ file: index.js:31 ~ app.disabled():', app.disabled());

// app.get('/about', handle);

// app.get('/contact', (req, res) => {
//     console.log(req.body);
//     console.log(typeof req.body);
//     res.send('Welcome to contact list');
// });

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

app.all('/home/:id', (req, res) => {
    console.log(req.body);
    console.log(req.userDetails);
    // console.log(req);
    res.send('This is Home Page!');
});

// admin.get('/dashboard', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('Welcome to admin dashboard');
// });

// admin.on('mount', (parent) => {
//     console.log('Admin Mounted');
//     console.log('🚀 ~ file: index.js:49 ~ admin.on ~ parent:', parent);
//     console.log('🚀 ~ file: index.js:50 ~ admin.on ~ app:', app);
// });

// app.use('/admin', admin);

app.listen(3000, () => {
    console.log('listening to port 3000');
});
