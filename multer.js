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

console.log(multer);
console.log('Hello Kishor');

// file upload folder
// const UPLOADS_FOLDER = './uploads';

// prepare the final multer upload object
// const upload = multer({
//     dest: UPLOADS_FOLDER,
// });

// upload.firstName = 'Kishor';
// upload.dest = UPLOADS_FOLDER;

// console.log(upload);

// module scaffolding
const app = express();
app.set('view engine', 'ejs');
app.set('uploads', path.resolve('./uploads'));
app.use(express.json());

// application route
// app.post('/', upload.single('avatar'), (req, res) => {
//     res.write('KKP');
//     res.send('Hello World!');
//     res.end();
// });

app.get('/', (req, res) => res.render('Homepage!'));

export default app;
