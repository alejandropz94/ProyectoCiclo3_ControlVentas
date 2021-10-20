const {response} = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) =>{
    /* === x-token -> convencion en header */
    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            ejecucion: false,
            msg: 'Token proporcionado, Invalido'
        });
    }

    try {
        const {uid, name} = jwt.verify(
            token,
            process.env.Ventas_JWT
        );

        req.id = uid;
        req.name = name;
    } catch (error) {

        return res.status(401).json({
            ejecucion: false,
            msg: "Token Invalido"
        })
    }

    next();
}

module.exports = {validarJWT}