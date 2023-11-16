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
import todoHandler from './routeHandler/todoHandler.js';

// express app initialization
const app = express();
app.use(express.json());

// punycode
// console.log(punycode);
// const domain = 'example.рф';
// const encodedDomain = punycode.encode(domain);
// console.log(encodedDomain); // Outputs: 'example.xn--p1ai'

// const decodedDomain = punycode.decode(encodedDomain);
// console.log(decodedDomain); // Outputs: 'example.рф'

// database connection with mongoose
mongoose
    .connect('mongodb://localhost/todos')
    .then(() => console.log('Connection Successfull'))
    .catch((err) => console.log(err));

// application routes
app.use('/', (req, res) => {
    console.log(req.body);
    res.send('Hello Kishor');
});

app.use('/todo', todoHandler);

// default error handlers
function errorhandler(err, req, res, next) {
    if (res.headerSent) {
        return next(err);
    }

    return res.send(500).json({ error: err });
}

export default app;
