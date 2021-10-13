const express = require('express');
const productos = require('../controller/Productos');
const usuario = require ('../controller/Usuarios')

const app = express.Router();

app.get("/getProductos", productos.getProductos);

app.post("/addProducto", productos.addProducto);

app.put("/editProducto", productos.editProducto);

app.delete("/deleteProducto", productos.deleteProducto);










app.get("/getUsuarios", usuario.getUsuarios);

app.post("/addProducto", usuario.addUsuario);

app.put("/editProducto", usuario.editUsuario);

app.delete("/deleteProducto", usuario.deleteUsuario);

module.exports = app;