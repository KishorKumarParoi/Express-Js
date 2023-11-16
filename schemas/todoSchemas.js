import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['active', 'inactive'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

console.log(todoSchema);

// export default mongoose.model('Todo', todoSchema);
export default todoSchema;
