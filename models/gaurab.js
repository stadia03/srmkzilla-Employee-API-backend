const mongoose = require('mongoose')


const gaurabschema = new mongoose.Schema({

     Id : { 
        type : String  , required :true 
     } ,  
     name : {
        type : String , required :  true
    } ,  
     email : {
        type : String,required : true 
    } ,
     age :{
        type : Number, required : true
    } , 
     gender : {
        type: String, required : true
    } , 
     phone_no:  {
        type: Number, required : true
    } 

})

//gaurabschema.set('validateBeforeSave', false);
// const mine = mongoose.model("Gaurab",gaurabschema)
module.exports = mongoose.model('gaurab',gaurabschema) //exporting this schema to app.js

// module.exports.mine = mine


