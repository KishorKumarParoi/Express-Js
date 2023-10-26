/*
 * Title : Testing Route
 * Description : Testing Route for Express.js
 * Author : Kishor Paroi
 * Date : 2023/10/26
 * Time : 10:37:05 AM
 */

// dependencies
import express from 'express';

// module scaffolding
const app = express();
const admin = express.Router();

// methods
app.use('/admin', admin);
app.use(express.json());

app.get('/hello', (req, res) => {
    console.log(req.body);
    res.send('Hello World');
});

admin.get('/hello', (req, res) => {
    res.send('Hello Admin');
});

export default app;
