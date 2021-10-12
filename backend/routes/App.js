const express = require('express');
const productos = require('../controller/Productos');

const app = express.Router();

app.get("/getProductos", productos.getProductos);

app.post("/addProducto", productos.addProducto);

app.put("/editProducto", productos.editProducto);

app.delete("/deleteProducto", productos.deleteProducto);

module.exports = app;