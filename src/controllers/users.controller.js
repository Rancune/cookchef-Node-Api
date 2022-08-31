import usersModel from "../Models/users.model";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
  try {
    const users = await usersModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await usersModel.findById(userId);
    res.status(200).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const userId = req.params.id;

  try {
    const existingUser = await usersModel.findOne({
      email: email,
    });

    if (existingUser) throw new Error("Cet email est deja utilise");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await usersModel.findByIdAndUpdate(userId, {
      $set: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword,
      },
    });

    if (!user) res.status(404).json({ message: "Invalid User" });

    return res.status(200).json({ message: "User Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await usersModel.findByIdAndDelete(userId);

    if (!user) res.status(404).json({ message: "Invalid User" });

    return res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
