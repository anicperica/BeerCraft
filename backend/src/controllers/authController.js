import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, passwordconfirm } = req.body;

    if (!name || !email || !password || !passwordconfirm)
      return res.status(400).json({ message: "Please fill all fileds" });

    if (password !== passwordconfirm) {
      return res.status(400).json({ message: "Password do not match" });
    }
    const userExist = await User.findOne({ email });
    if (userExist)
      return res.status(400).json({ message: "User already exist" });
    const user = await User.create({ name, email, password });

    const token = generateToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
      });

      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
