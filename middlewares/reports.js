const getActivity = async (req, res, next) => {

    const parametros = req.body
    const query = req.query
    const url = req.url
    
    console.log(
      `Hoy ${new Date()} 
      se ha recibido una consulta de la ruta ${url}
      con los parámetros:`, parametros , ` y con datos de query`, query  
    )
    next()
  }
  
  export { getActivity }