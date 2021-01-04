const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
   //usuario
   nombre: String,
   apellido: String,
   cedula: Number,
   email: String,
   password: String,
   pais: String,
   ciudad: String,
   historialcompras: String,
   
   //articulo
   artnombre: String,
   artdescripcion: String,
   artprecio: Number,
   artmoneda: String,
   artimg: String,
   
   //mensajes
   msjid: String,
   msjbody: String,
   msjread: Boolean,
   msjnew: Boolean,
   
   //shopping
   shparticuloid: String,
   shpcantidad: Number,
   shpcomprador: String,
   
   //trabajos
   imgtrabajo: String,
   imgtrabajotitulo: String,
   
    
    
});

module.exports= mongoose.model('Data', Data);
