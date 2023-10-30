/*
 * Title : Express File Upload Router
 * Description : File Upload with Multer
 * Author : Kishor Paroi
 * Date : 2023/10/29
 * Time : 6:47:23 PM
 */

import express from 'express';
import multer from 'multer';

console.log(multer);
console.log('Hello Kishor');

// file upload folder
const UPLOADS_FOLDER = './uploads/';

// prepare the final multer upload object
const upload = multer({
    dest: UPLOADS_FOLDER,
});

// module scaffolding
const app = express();

// application route
app.post('/', upload.single('avatar'), (req, res) => {
    res.send('Hello World!');
});

export default app;
