/*
 * Title : To-Do Handler with Express.js
 * Description : Creating a To-Do API with mongodb Database
 * Author : Kishor Paroi
 * Date : 2023/11/16
 * Time : 5:35:12 PM
 */

// dependencies
import express from 'express';
import mongoose from 'mongoose';
import todoSchema from '../schemas/todoSchemas.js';

// creating a database Model
const Todo = new mongoose.model('Todo', todoSchema);

// express app initialization
const router = express.Router();

// get all the todos
router.get('/', async (req, res) => {
    res.send('Hello Kishor');
});

// get a single todo with id
router.get('/:id', async (req, res) => {
    res.send('Hello Kishor');
});

// post a todo
router.post('/', async (req, res) => {
    // res.send('Hello Kishor');
    const newToDo = new Todo(req.body);
    await newToDo.save((err) => {
        if (err) {
            res.status(500).json({
                error: 'There was server side error!',
            });
        } else {
            res.status(200).json({
                message: 'Todo was inserted successfully!',
            });
        }
    });
});

// post multiple todo
router.post('/all', async (req, res) => {
    res.send('Hello Kishor');
});

// put a todo
router.put('/:id', async (req, res) => {
    res.send('Hello Kishor');
});

// delete a todo
router.delete('/:id', async (req, res) => {
    res.send('Hello Kishor');
});

// export default router;
export default router;
