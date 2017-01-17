import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import mongoosePaginate from 'mongoose-paginate';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  email: {
    type: String,
    //unique: true,
    //required: true
  },
  password: {
    type: String,
    required: true,
  },
  google: mongoose.Schema.Types.Mixed
  }, {
  timestamps: true
});

UserSchema.pre('save', function(next) {
  let user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.method({
  comparePassword: function(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  }
});

UserSchema.plugin(mongoosePaginate);

export default mongoose.model('User', UserSchema);
