const validateParametersLogin = ( req, res, next) =>{
    
    const { email, password } = req.body;
    
    if(!email || !password){
        return res.status(400).json({error: "Debe ingresar email o password"});
    }
    next();
}

export { validateParametersLogin };