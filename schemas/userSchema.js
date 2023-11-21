import mongoose, { Mongoose } from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
    },
    todos: [
        {
            type: Mongoose.Types.ObjectId,
            ref: 'Todo',
        },
    ],
});

// console.log(userSchema);
export default userSchema;
