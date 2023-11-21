/*
 * Title : Mongoose with Express.js
 * Description : Creating a To-Do API with mongodb Database
 * Author : Kishor Paroi
 * Date : 2023/11/06
 * Time : 11:25:28 AM
 */

// dependencies
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import todoHandler from './routeHandler/todoHandler.js';
import userHandler from './routeHandler/userHandler.js';

// express app initialization
const app = express();
dotenv.config();
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
app.use('/todo', todoHandler);
app.use('/user', userHandler);

// default error handlers
const errorhandler = (err, req, res, next) => {
    if (res.headerSent) {
        return next(err);
    }

    return res.send(500).json({ error: err });
};

app.use(errorhandler);

export default app;
