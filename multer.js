/*
 * Title : Express File Upload Router
 * Description : File Upload with Multer
 * Author : Kishor Paroi
 * Date : 2023/10/29
 * Time : 6:47:23 PM
 */

import express from 'express';
import multer from 'multer';
import path from 'path';

console.log(path);
console.log('Hello Kishor');

// file upload folder
const UPLOADS_FOLDER = './uploads/';

// prepare the final multer upload object
const upload = multer({
    dest: UPLOADS_FOLDER,
});

// module scaffolding
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve('./Raw/'));

app.use(express.json());

// application route
app.get('/', (req, res) => res.render('homepage'));

app.post('/upload', upload.single('kkp'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send('Hello World!');
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});

export default app;
