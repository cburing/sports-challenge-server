import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import mongoosePaginate from 'mongoose-paginate';

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});
export default mongoose.model('Team', TeamSchema);
