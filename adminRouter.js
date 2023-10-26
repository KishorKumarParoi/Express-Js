/*
 * Title : Admin Router
 * Description : Admin Router for Express.js
 * Author : Kishor Paroi
 * Date : 2023/10/25
 * Time : 10:38:24 PM
 */

import express from 'express';

const adminRoute = express.Router();

const loggerWrapper = (options) => {
    console.log('🚀 ~ file: adminRouter.js:14 ~ loggerWrapper ~ options:', options);
    return function logger(req, res, next) {
        if (options.log === 'true') {
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
                req.originalUrl
            } - 
            ${req.protocol} - ${req.ip} - ${req.hostname} - ${req.baseUrl}`);
            next();
        } else {
            throw new Error('There is an error');
        }
    };
};

adminRoute.use(loggerWrapper({ log: 'true' }));

adminRoute.get('/path', (req, res) => {
    res.send('admin router');
});

adminRoute.use('/admin', adminRoute);

const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('There is an server side error');
    next();
};

adminRoute.use(errorMiddleware);

export default adminRoute;
