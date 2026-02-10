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
      isAdmin: user.isAdmin,
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
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const getCurrentUserProfile = async (req,res) => {
  try {
    
     const user = req.user;
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.error("Error in getCurrentUserProfile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllRegularUsers = async (req, res) => {
  try {

    const users = await User.find({ isAdmin: false });

    if (!users || users.length === 0) {
      return res.status(200).json({
        message: "No regular users found",
        users: [],
      });
    }

    const formattedUsers = users.map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin || false,
    }));

    res.status(200).json({
      message: "Regular users retrieved successfully",
      users: formattedUsers,
    });
  } catch (error) {
    console.error("Error in getAllRegularUsers:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, isAdmin } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (name) user.name = name;
    if (email) user.email = email;
    if (typeof isAdmin === "boolean") user.isAdmin = isAdmin;

    await user.save();

    res.status(200).json({
      message: "User updated",
      user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
    });
  } catch (error) {
    console.error("Error in updateUser:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
