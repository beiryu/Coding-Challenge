import bcrypt from 'bcryptjs';
import mongoose, { Document, Schema } from 'mongoose';

interface UserSchema extends Document {
  email: string;
  firstname: string;
  lastname: string;
  deleted: boolean;
  password: string;
  generateAuthToken: () => string;
}

const userSchema = new Schema<UserSchema>({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

userSchema.pre<UserSchema>('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt: string = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.set('toJSON', {
  transform: function (_doc, ret) {
    delete ret['password'];
    delete ret['__v'];
    return ret;
  },
});

const User = mongoose.model<UserSchema>('User', userSchema);

export default User;
