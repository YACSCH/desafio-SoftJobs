const authToken = (req, res, next) => {

  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Credenciales requeridas, Token no existe!!!!" });
  }
  next();
};
export { authToken };
