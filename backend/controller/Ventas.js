const express = require('express');

//const pool = require('../settings/mongodb+srv://ventas:Colombia2021*-@cluster0.nfjsb.mongodb.net/ventas');
const Venta = require('../models/ventas');

let getVentas = async function(req, res) {
    const model = await Venta.find();
    Venta.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al ingresar una  Venta",
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

let addVenta = async function(req, res) {
    const {codigo_venta, id_producto, medio_pago, fecha_venta, cliente, ide_cliente, vendedor, estado, valor_total} = req.body;
    const venta = await new Venta({
        codigo_venta,
        id_producto,
        medio_pago,
        fecha_venta,
        cliente,
        ide_cliente,
        vendedor,
        estado, 
        valor_total
    });

    venta.save((err, data) => {
        if(err) {
            return res.json({
                status: 200,
                mensaje: "Error al ingresar una venta",
                err: err
            });
        }
    });
    res.send("ok")
}

let editVenta = async function (req, res) {
    const {codigo_venta, id_producto, medio_pago, fecha_venta, cliente, ide_cliente, vendedor, estado, valor_total} = req.body;
    const editVenta = {
        codigo_venta,
        id_producto,
        medio_pago,
        fecha_venta,
        cliente,
        ide_cliente,
        vendedor,
        estado, 
        valor_total,
    }
    const venta = await Venta.updateOne({_id: _id}, editVenta);
    res.send("ok")
}

let deleteVenta = async function (req, res) {
    let id = req.body;
    await Venta.findOneAndDelete({_id: id});
    res.send("ok")
}

module.exports = {
    getVentas,
    addVenta,
    editVenta,
    deleteVenta,
}