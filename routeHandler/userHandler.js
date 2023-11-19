/*
 * Title : User Signup Login API with Express.js
 * Description : User Handler with Express.js
 * Author : Kishor Paroi
 * Date : 2023/11/19
 * Time : 9:30:04 PM
 */

// dependencies
import express from 'express';
import mongoose from 'mongoose';

// schemas
import userSchema from '../schemas/userSchema.js';

// creating a database Model
const User = new mongoose.model('User', userSchema);

// express app initialization
const router = express.Router();

// get all the users

router.post('/', async (req, res) => {
    // res.send('Hello World');
    try {
        const data = await User.create(req.body);
        res.status(200).json({
            result: data,
            message: 'User was created successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
        });
    }
});
// export default router;
export default router;
