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
app.locals.title = 'My App';
app.locals.author = 'Kishor Paroi';

app.post('/', (req, res) => {
    res.send('This is Home Page!');
});

app.get('/about', handle);

app.listen(3000, () => {
    console.log('listening to port 3000');
});
