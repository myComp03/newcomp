import  User  from "../models/user.model.js";

export const saveUser = async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    const { email, name, userImg } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email, name, userImg });
      console.log("New user created:", user);
    } else {
      console.log("User already exists:", user);
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
