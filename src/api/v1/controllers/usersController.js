import { createUser, findUserbyEmail } from "../models/userModel.js";

const createNewUser = async (req, res) => {
  try {
    const  user  = req.body;
    const newUser = await createUser(user);
    res.status(201).json({ user: newUser }); 
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const isLogin = async () => {

  try {
    const { email, password } = req.body
    await verificarCredenciales(email, password) 
    const token = jwt.sign({ email }, process.env.JWT_SECRET ) 
    res.send(token)
    } catch (error) {
    console.log(error)
    res.status(error.code || 500).send(error)
    }

} 





export { createNewUser, isLogin };