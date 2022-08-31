import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", UserSchema, "users");
