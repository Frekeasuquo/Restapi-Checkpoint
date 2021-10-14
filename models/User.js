import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', PostSchema);