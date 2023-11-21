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
import checkLogin from '../middlewares/checklogin.js';
import todoSchema from '../schemas/todoSchemas.js';
// creating a database Model
const Todo = new mongoose.model('Todo', todoSchema);

// express app initialization
const router = express.Router();

// get all the todos
router.get('/', checkLogin, async (req, res) => {
    try {
        const data = await Todo.find({ status: 'inactive' })
            .select({
                _id: 0,
                date: 0,
            })
            .limit(2);

        res.status(200).json({
            result: data,
            message: 'Todos were fetched successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});

// get active todo
router.get('/active', async (req, res) => {
    try {
        const todo = new Todo();
        const data = await todo.findActive();
        res.status(200).json({
            result: data,
            message: 'Active Todos were fetched successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});

// get active todo with callback
// No longer accepts callback
// hence promise .then catch method is used
router.get('/active-callback', (req, res) => {
    const todo = new Todo();
    todo.findActiveCallback()
        .then((data) => {
            res.status(200).json({
                result: data,
                message: 'Active Todos were fetched successfully with callback!',
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: `${err}`,
            });
        });
});

router.get('/:language', async (req, res) => {
    try {
        const data = await Todo.find().byLanguage(req.params.language);
        res.status(200).json({
            result: data,
            message: 'Todos were fetched successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});

router.get('/js', async (req, res) => {
    try {
        const data = await Todo.findByJS();
        res.status(200).json({
            result: data,
            message: 'Todos were fetched successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});

// get a single todo with id
router.get('/:id', async (req, res) => {
    // res.send('Hello Kishor');
    try {
        const data = await Todo.find({ _id: req.params.id })
            .select({
                _id: 0,
                date: 0,
            })
            .limit(2);

        res.status(200).json({
            result: data,
            message: 'Todo was fetched successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});

// post a todo
router.post('/', async (req, res) => {
    try {
        const data = await Todo.create(req.body);
        console.log(data);
        res.status(200).json({
            result: data,
            message: 'Todo was inserted successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});

// post multiple todo
router.post('/all', async (req, res) => {
    try {
        const data = await Todo.insertMany(req.body);
        console.log(data);
        res.status(200).json({
            result: data,
            message: 'Todo was inserted successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});

// update a todo with given id
router.put('/:id', async (req, res) => {
    try {
        const data = await Todo.findByIdAndUpdate(
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
                new: true,
                // useFindAndModify: false,
            }
        );
        console.log(data);
        res.status(200).json({
            result: data,
            message: 'Todo was updated successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});

// delete a todo
router.delete('/:id', (req, res) => {
    // promise .then catch method
    Todo.deleteOne({ _id: req.params.id })
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
