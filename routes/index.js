const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES =__dirname; //nos dara la ruta absoluta de pack donde se encuantra dicho archivo

const removeExtension = (CajonDisponible) =>{
    //TODO Parking.js
    return CajonDisponible.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((Cajon) => {
    const Disponible = removeExtension(Cajon) //todo donde puede que llegue index o parking
    if(Disponible !== 'index'){
        console.log(`Cargando ruta ${Disponible}`)
        router.use(`/${Disponible}`,require(`./${Cajon}`)); //sera el nombre del archivo "en dado caso sera http://localhost:3000/api/Parking"

    }
})

module.exports = router