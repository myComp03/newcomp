import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    userImg: { type: String },
  },
  { timestamps: true } // 👈 yeh hona MUST hai
);

const User = mongoose.model("User", userSchema);

export default User;
