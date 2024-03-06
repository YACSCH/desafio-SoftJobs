import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findError } from "../utils/utils.js";

import { createUser, findUserbyEmail } from "../models/userModel.js";

const createNewUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await createUser(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await findUserbyEmail(email);
    if (!findUser) {
      const errorFound = findError("auth01");
      return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
    } else {
      const isPasswordValid = bcrypt.compareSync(password, findUser.password);
      if (!isPasswordValid) {
        const errorFound = findError("auth02");
        return res
          .status(errorFound[0].status)
          .json({ error: errorFound[0].message });
      } else {
        const { email } = findUser;
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({
          message: `Bienvenido, ${email} has iniciado sesion`,
          code: 200,
          token,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const Auth = req.header("Authorization");
    const token = Auth.split("Bearer ")[1];
    jwt.verify(token, process.env.JWT_SECRET);
    const { email } = jwt.decode(token);
    const user = await findUserbyEmail(email);
    res.status(200).json([user]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export { createNewUser, loginUser, getUser };
