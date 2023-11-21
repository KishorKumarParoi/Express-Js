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
import jwt from 'jsonwebtoken';
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

router.post('/login', async (req, res) => {
    try {
        const user = await User.find({ username: req.body.username });
        console.log('🚀 ~ file: userHandler.js:47 ~ router.post ~ user:', user);

        if (user && user.length > 0) {
            // res.send('found username');
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
            console.log(
                '🚀 ~ file: userHandler.js:51 ~ router.post ~ isValidPassword',
                isValidPassword
            );

            if (isValidPassword) {
                // generate token
                const token = jwt.sign(
                    {
                        username: user[0].username,
                        userId: user[0]._id,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '2 days',
                    },
                    {
                        algorithm: 'HS384',
                    }
                );
                console.log(token);
                res.status(200).json({
                    access_token: token,
                    message: 'Login successful!',
                });
            } else {
                res.status(401).json({
                    error: 'Authentication failed!',
                });
            }
        } else {
            res.status(401).json({
                error: 'Authentication failed!',
            });
        }
    } catch {
        res.status(401).json({
            error: 'Authentication failed!',
        });
    }
});

// export default router;
export default router;
