/*
 * Title : Mongoose with Express.js
 * Description : Creating a To-Do API with mongodb Database
 * Author : Kishor Paroi
 * Date : 2023/11/06
 * Time : 11:25:28 AM
 */

// dependencies
import express from 'express';
import mongoose from 'mongoose';

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
    .connect('mongodb://localhost/todos')
    .then(() => console.log('Connection Succesfull'))
    .catch((err) => console.log(err));

// application routes
app.use('/', (req, res) => {
    console.log(req.body);
    res.send('Hello Kishor');
});

// default error handlers
function errorhandler(err, req, res, next) {
    if (res.headerSent) {
        return next(err);
    }

    return res.send(500).json({ error: err });
}

export default app;
