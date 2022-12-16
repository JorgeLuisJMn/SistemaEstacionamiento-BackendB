const { default: mongoose } = require("mongoose")
const mongose = require("mongoose")

const personalSheme = new mongoose.Schema(
    {
    name:{
            type:String
        },
        edad:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:["user","admin"],
            default:"user",
        },
        
    },
    {
        timestamps:true, // registrar TODO fecha de cracion y fecha de actualizacion
        versionKey:false
    }
    
);

module.exports = mongoose.model("personal", personalSheme)