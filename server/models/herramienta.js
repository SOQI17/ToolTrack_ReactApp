const mongoose = require('mongoose');
const HerramientaSchema = new mongoose.Schema({
  nombre: String,
  codigo: String,
  estado: String
});
module.exports = mongoose.model('Herramienta', HerramientaSchema);