const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
   linkpais: String,
   link: String,
    
    
});

module.exports= mongoose.model('Data', Data);
