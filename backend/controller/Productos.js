const express = require('express');

const pool = require('../settings/db');
const Producto = require('../models/Producto');

let getProductos = async function(req, res) {
    const model = await Producto.find();
    Producto.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al obtener productos",
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

let addProducto = async function(req, res) {
    const {descripcion, valor_unitario, disponible} = req.body;
    const producto = await new Producto({
        descripcion,
        valor_unitario,
        disponible
    });

    producto.save((err, data) => {
        if(err) {
            return res.json({
                status: 200,
                mensaje: "Error al ingresar producto",
                err: err
            });
        }
    });
    res.send("ok")
}

let editProducto = async function (req, res) {
    const { _id, descripcion, valor_unitario, disponible } = req.body;
    const editProducto = {
        descripcion, valor_unitario, disponible
    }
    const producto = await Producto.updateOne({_id: _id}, editProducto);
    res.send("ok")
}

let deleteProducto = async function (req, res) {
    let id = req.body;
    await Producto.findOneAndDelete({_id: id});
    res.send("ok")
}

module.exports = {
    getProductos,
    addProducto,
    editProducto,
    deleteProducto
}