import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

const User = mongoose.models.User || mongoose.model('user', userSchema)

export default User