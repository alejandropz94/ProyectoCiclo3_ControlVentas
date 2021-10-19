const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ventas:Colombia2021*-@cluster0.nfjsb.mongodb.net/ventas')
   .then(data => console.log("La base de datos está conectada"))
    .then(err => console.log("Error db", err));

