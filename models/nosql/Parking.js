const { default: mongoose } = require("mongoose")
const mongose = require("mongoose")

const ParkingScheme = new mongoose.Schema(
    {
    clavecajon:{
            type:Number,
        },
        cajondisponible:{
            ID:{
                type: Number,
            },
            Responsable:{
                type:String,
            },
            modelo:{
                type:Number,
            },
            marca:{
                type:String,
            },
            placa:{
                type:Number,
            }
            
        },
        Duracion:{
            hraEntrada:{
                type:Number,
            },
            hraSalida:{
                type:Number,
            },
        },
        mediaId: {
            type: mongoose.Types.ObjectId
          }
    },
    {
        versionKey:false,
        timestamps:true, // registrar TODO fecha de cracion y fecha de actualizacion
    }
    
);

module.exports = mongoose.model("Parking", ParkingScheme)