/*
 * Title : Mongoose with Express.js
 * Description : Creating a To-Do API with mongodb Database
 * Author : Kishor Paroi
 * Date : 2023/11/06
 * Time : 11:25:28 AM
 */

// dependencies
import express from 'express';
// module scaffolding
const app = express();
app.use(express.json());

app.use('/', (req, res) => {
    console.log(req.body);
    res.send('Hello Kishor');
});

export default app;
