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

// console.log(path);
console.log('Hello Kishor');

// file upload folder
const UPLOADS_FOLDER = './uploads/';

// prepare the final multer upload object
const upload = multer({
    dest: UPLOADS_FOLDER,
    limits: {
        fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
        console.log(file);
        if (file.fieldname === 'image') {
            if (
                file.mimetype === 'image/png' ||
                file.mimetype === 'image/jpg' ||
                file.mimetype === 'image/jpeg'
            ) {
                console.log('kishor');
                // cb('Successfully Uploaded Files to the server', true);
                cb(null, true);
            } else {
                console.log('paroi');
                cb(new Error('Only  jpg, jpeg and png are allowed'));
            }
        } else if (file.fieldname === 'doc') {
            if (file.mimetype === 'application/pdf' || file.mimetype === 'application/zip') {
                cb(null, true);
            } else {
                cb(new Error('Only pdf and zip are allowed'));
            }
        } else {
            cb(new Error('There was an unknown error!'));
        }
    },
});

// module scaffolding
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve('./Raw/'));

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('There was an upload error !');
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send('Success!');
    }
    next();
});

// application route
app.get('/', (req, res) => res.render('homepage'));

app.post(
    '/upload',
    upload.fields([
        {
            name: 'doc',
            maxCount: 1,
        },
        {
            name: 'gallery',
            maxCount: 1,
        },
        {
            name: 'image',
        },
    ]),
    (req, res) => {
        console.log(req.body);
        res.send('Hello World KKP !');
        // res.redirect('/');
    }
);

// uploading form
app.post('/test', upload.none(), (req, res) => {
    console.log(req.body);
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});

export default app;
