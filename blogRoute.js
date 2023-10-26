/*
 * Title : Blog Router
 * Description : Blog Route for Express.js
 * Author : Kishor Paroi
 * Date : 2023/10/25
 * Time : 11:31:26 PM
 */

import express from 'express';

const app = express();
const blog = express.Router();
const blogAdmin = express.Router();
const admin = express.Router();

app.use('/blog', blog);
blog.use('/admin', blogAdmin);

blogAdmin.use('/admin', admin);
admin.use(express.json());
blogAdmin.use(express.json());

blogAdmin.get('/blogging', (req, res) => {
    console.log(req.body);
    console.log('blogging');
    res.send('blogging');
});

admin.get('/blogging', (req, res) => {
    console.log(req.body);
    console.log('blogging');
    res.send('Admin blogging');
});

// console.dir(app.path());
// console.dir(blog.path());
// console.dir(blogAdmin.path());
// console.dir(admin.path());
console.log('KKP');

export default blogAdmin;
