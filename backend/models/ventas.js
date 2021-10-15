const {Schema, model} = require('mongoose');
const ObjectId = Schema.ObjectId;

const Venta = new Schema({
  id: ObjectId,
  codigo_venta: { type: String, require: true},
  id_producto: { type: Number, require: true},
  medio_pago: { type: Number, require: true},
  fecha_venta: { type: Date, require: true},
  cliente: { type: String, require: true},
  ide_cliente: { type: Number, require: true},
  vendedor: { type: String, require: true},
  estado: {type: String, require: true}
  
});

module.exports = model('Ventas', Venta);

