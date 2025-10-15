import User from "../models/user.modal.js";
import bcrypt from "bcryptjs";
import { generateToken } from "./utils.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({
        message:
          "Email already exists! Try with a different email id to register",
      });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
    });

    if (newUser) {
      await newUser.save();
       generateToken(newUser._id,res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
