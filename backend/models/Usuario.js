const {Schema, model} = require('mongoose');


const Usuario = new Schema({
  documento: { type: Number, require: true},
  nombre: { type: String, require: true},
  rol: {type: String, require: true}
});

module.exports = model('Usuario', Usuario);