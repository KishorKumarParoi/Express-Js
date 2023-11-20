/*
 * Title : User Signup Login API with Express.js
 * Description : User Handler with Express.js
 * Author : Kishor Paroi
 * Date : 2023/11/19
 * Time : 9:30:04 PM
 */

// dependencies
import bcrypt from 'bcrypt';
import express from 'express';
import mongoose from 'mongoose';

// schemas
import userSchema from '../schemas/userSchema.js';

// creating a database Model
const User = new mongoose.model('User', userSchema);

// express app initialization
const router = express.Router();

// signup
router.post('/signup', async (req, res) => {
    try {
        // const data = await User.create(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
            status: req.body.status,
        });
        res.status(200).json({
            result: newUser,
            message: 'Signup was successful!',
        });
    } catch (err) {
        res.status(500).json({
            error: 'Signup failed!',
        });
    }
});
// export default router;
export default router;
