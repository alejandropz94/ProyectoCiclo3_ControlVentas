const express = require('express');
const productos = require('../controller/Productos');

const ventas = require('../controller/Ventas');

const app = express.Router();

app.get("/getProductos", productos.getProductos);

app.post("/addProducto", productos.addProducto);

app.put("/editProducto", productos.editProducto);

app.delete("/deleteProducto", productos.deleteProducto);

app.get("/getVentas", ventas.getVentas);

app.post("/addVenta", ventas.addVenta);

app.put("/editVenta", productos.editVenta);

app.delete("/deleteVenta", ventas.deleteVenta);










module.exports = app;