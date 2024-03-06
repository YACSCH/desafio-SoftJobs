const validateParametersUser = (req, res, next) => {
    
    const { email, password, rol, lenguage }  = req.body;
    if (!email || !password || !rol || !lenguage) {
        return res.status(400).json({ error: "los campos email, password, rol y lenguaje deben estar presentes" });
    }
    next();
}

export { validateParametersUser };