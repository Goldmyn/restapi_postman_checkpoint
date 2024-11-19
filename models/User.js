import mongoose from "mongoose";

// Create user Schema

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 18,
    required: true,
  },
});

const Users = mongoose.model("users_list", UserSchema);

export default Users;
