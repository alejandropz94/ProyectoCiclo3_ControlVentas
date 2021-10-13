const express = require('express');

const pool = require('../settings/db');
const Usuario = require('../models/Producto');

let getUsuarios = async function(req, res) {
    const model = await Usuario.find();
    Usuario.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al visualizar usuario",
                err: err
            })
        }
            res.json({
                status: 200,
                total: total,
                model: model
            });
    });
}

let addUsuario = async function(req, res) {
    const {documento, nombre, rol} = req.body;
    const usuario = await new Usuario({
        documento,
        nombre,
        rol
    });

    usuario.save((err, data) => {
        if(err) {
            return res.json({
                status: 200,
                mensaje: "Error al visualizar usuario",
                err: err
            });
        }
    });
    res.send("ok")
}

let editUsuario = async function (req, res) {
    const { estado, rol} = req.body;
    const editUsuario= {
        estado, rol
    }
    const usuario = await Usuario.updateOne({_id: _id}, editUsuario);
    res.send("ok")
}

let deleteUsuario = async function (req, res) {
    let id = req.body;
    await Usuario.findOneAndDelete({documento: documento});
    res.send("ok")
}

module.exports = {
    getUsuarios,
    addUsuario,
    editUsuario,
    deleteUsuario
}