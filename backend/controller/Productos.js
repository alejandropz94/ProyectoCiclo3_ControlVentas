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
            });
        }
            res.json({
                status: 200,
                total: total,
                productos: model
            });
    });
}

let addProducto = async function(req, res) {
    const {descripcion, precio, disponible} = req.body;
    const producto = await new Producto({
        descripcion,
        valor_unitario: precio,
        disponible
    });
    try{
        producto.save();
        res.status(200).send({ok: true, mensaje: "Producto registrado correctamente"});
    }catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al registrar producto", error: error});
    }
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