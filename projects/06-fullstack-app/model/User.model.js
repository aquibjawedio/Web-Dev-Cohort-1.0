import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
