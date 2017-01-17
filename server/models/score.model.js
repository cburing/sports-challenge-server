import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import mongoosePaginate from 'mongoose-paginate';

const ScoreSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    submitted: {
        type: Number,
    },
    counted: {
        type: Number,
    }
}, {
        timestamps: true
    });

export default mongoose.model('Score', ScoreSchema);