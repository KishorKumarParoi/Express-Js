/*
 * Title :  Express Basics
 * Description :  Learning Express.js
 * Author : Kishor Paroi
 * Date : 2023/10/15
 * Time :  8:57:30 PM
 */

// dependencies
import express from 'express';
import handle from './handle.js';

// module scaffolding
const app = express();
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

app.use(express.json());
app.use('/admin', admin);

app.locals.title = 'My App';
app.locals.author = 'Kishor Paroi';

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('This is Home Page!');
});

admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath);
    res.send('Welcome to admin dashboard');
});

app.get('/about', handle);

app.listen(3000, () => {
    console.log('listening to port 3000');
});
