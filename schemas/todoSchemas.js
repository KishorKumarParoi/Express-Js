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

// instance methods
todoSchema.methods = {
    findActive() {
        return mongoose.model('Todo').find({ status: 'active' });
    },
    findActiveCallback(cb) {
        return mongoose.model('Todo').find({ status: 'inactive' }, cb);
    },
};

// static methods
todoSchema.statics = {
    findByJS() {
        return this.find({ title: /js/i });
    },
};

// query helpers
todoSchema.query = {
    byLanguage(language) {
        return this.find({ title: new RegExp(language, 'i') });
    },
};

console.log(todoSchema);

// export default mongoose.model('Todo', todoSchema);
export default todoSchema;
