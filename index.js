/*
 * Title :  Express Basics
 * Description :  Learning Express.js
 * Author : Kishor Paroi
 * Date : 2023/10/15
 * Time :  8:57:30 PM
 */

// dependencies
import express from 'express';
// module scaffolding
const app = express();

const router = express.Router({
    caseSensitive: true,
});
app.use(router);

// app.use(
//     express.static(`${process.cwd()}/Raw/`, {
//         index: 'home.html',
//     })
// );

// console.log(router);
router.post('/', (req, res) => {
    res.send('This is Home Page!');
});

router.get('/about', (req, res) => {
    console.log(req.body);
    console.log(typeof req.body);
    res.send('THis is about page');
});

app.listen(3000, () => {
    console.log('listening to port 3000');
});
