/*
 * Title :  Express Basics
 * Description :  Learning Express.js
 * Author : Kishor Paroi
 * Date : 2023/10/15
 * Time :  8:57:30 PM
 */

// dependencies
import express from 'express';
import adminRoute from './adminRouter.js';
import blogAdmin from './blogRoute.js';
// import publicRoute from './publicRoute.js';
// import testRoute from './testRoute.js';

// module scaffolding
const app = express();

app.use(adminRoute);
app.use('/blog', blogAdmin);
// app.use(publicRoute);
// app.use(testRoute);

app.listen(3000, () => {
    console.log('Listening to port 3000');
});
