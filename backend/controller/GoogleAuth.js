const {response} = require('express');
const { generateJWT } = require('../helpers/jwt');
const Usuario = require('../models/Usuario');

const gAuth = async (req, res = response) =>{

    const rol = "No-asignado";
    const estado = false;
    const {uid: idToken, name, email} = req

    /*try {
        
        let usuario = await Usuario.findOne({email});

        if(usuario){
            if(usuario.rol.name === 'No-asignado'){
                res.status(401).json({
                    ok: false,
                    msg: 'Usuario no autorizado por el admin'
                });
            }else{
              const Token = await generateJWT(usuario.id, usuario.name);
                re.json({
                    ok: true,
                    msg:'Ok',
                    uid:usuario.id,
                    name:usuario.name,
                    Token
                });
            }
        }else{
            usuario = new Usuario({
                nombre:name,
                mail:email,
                estado,
                rol
            });

            const newUser = await usuario.save();
            res.status(201).json({
                ok: true,
                msg: 'Usuario creado con exito',
                uid: newUser.id,
                name: newUser.name
            })
        }


    } catch (error) {
        
    }*/

    
   //Generacion del token
    const Token = await generateJWT(idToken, name);
    res.json({
        msg: "Respuesta desde Google Auth",
        nombre:name,
        mail:email,
        Token
    })
}

const renovarToken = async (req, res=response) =>{
    const {id, name} = req.body;
    const Token = await generateJWT(id, name);
    res.json({
        ejecucion:true,
        msg: "Token generado satisfactoriamente",
        Token
    })

}

module.exports = {gAuth, renovarToken}