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
    // res.send('Hello Kishor');
    await Todo.find({ status: 'inactive' })
        .select({
            _id: 0,
            date: 0,
        })
        .limit(2)
        .then((data) => {
            res.status(200).json({
                result: data,
                message: 'Todo was fetched successfully!',
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: `${err}`,
            });
        });
});

// get a single todo with id
router.get('/:id', async (req, res) => {
    // res.send('Hello Kishor');
    await Todo.find({ _id: req.params.id })
        .select({
            _id: 0,
            date: 0,
        })
        .limit(2)
        .then((data) => {
            res.status(200).json({
                result: data,
                message: 'Todo was fetched successfully!',
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: `${err}`,
            });
        });
});

// post a todo
router.post('/', async (req, res) => {
    // res.send('Hello Kishor');
    console.log(req.body);
    // const newToDo = new Todo(req.body);
    await Todo.create(req.body)
        // .save()
        .then((data) => {
            console.log(data);
            res.status(200).json({
                message: 'Todo was inserted successfully!',
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: `${err}`,
            });
        });
});

// post multiple todo
router.post('/all', async (req, res) => {
    // res.send('Hello Kishor');
    await Todo.insertMany(req.body)
        .then((data) => {
            console.log(data);
            res.status(200).json({
                message: 'Todo was inserted successfully!',
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: `${err}`,
            });
        });
});

// update a todo with given id
router.put('/:id', async (req, res) => {
    // res.send('Hello Kishor');

    await Todo.findByIdAndUpdate(
        { _id: req.params.id },
        {
            // $set: {
            //     status: 'active',
            //     title: 'Get a 500k Dollar Job',
            //     author: 'Kishor Paroi',
            // },

            $set: req.body,
        },
        {
            // returnOriginal: false,
            // returnDocument: 'after',
            new: false,
            // useFindAndModify: false,
        }
    )
        .then((data) => {
            console.log(data);
            res.status(200).json({
                message: 'Todo was updated successfully!',
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: `${err}`,
            });
        });
});

// delete a todo
router.delete('/:id', async (req, res) => {
    // res.send('Hello Kishor');
    await Todo.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.status(200).json({
                result: data,
                message: 'Todo was deleted successfully!',
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: `${err}`,
            });
        });
});

// export default router;
export default router;
