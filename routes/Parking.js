const express = require("express");
const router = express.Router();
const {getItems, createItem} = require("../controllers/Parking");

//TODO los comentario  http://localhost/Parking "agregar, crear" 

router.get("/",getItems);
router.post("/",createItem);


module.exports = router;