const mongoose = require('mongoose');

mongoose.
    connect('mongodb://localhost/ventas')
    .then(data => console.log("DB is connected"))
    .then(err => console.log("Error db", err));