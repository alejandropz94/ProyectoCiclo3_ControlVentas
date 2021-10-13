const express = require('express');
const productos = require('../controller/Productos');
const usuario = require ('../controller/Usuarios')

const ventas = require('../controller/Ventas');

const app = express.Router();

app.get("/getProductos", productos.getProductos);

app.post("/addProducto", productos.addProducto);

app.put("/editProducto", productos.editProducto);

app.delete("/deleteProducto", productos.deleteProducto);

<<<<<<< HEAD
app.get("/getVentas", ventas.getVentas);

app.post("/addVenta", ventas.addVenta);

app.put("/editVenta", productos.editVenta);

app.delete("/deleteVenta", ventas.deleteVenta);
=======



>>>>>>> 7591acf59ececc7d97f66b7d3e65380f185075e1






<<<<<<< HEAD



=======
app.get("/getUsuarios", usuario.getUsuarios);

app.post("/addProducto", usuario.addUsuario);

app.put("/editProducto", usuario.editUsuario);

app.delete("/deleteProducto", usuario.deleteUsuario);
>>>>>>> 7591acf59ececc7d97f66b7d3e65380f185075e1

module.exports = app;