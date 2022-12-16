const {ParkingModel} = require(`../models`);

/**
 * obtener lista de una base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) =>{
    const data = await ParkingModel.find({});
    res.send({data});
};
 

/**
 * optener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) =>{}; 


/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) =>{
    const {body } = req
    console.log(body)
    const data = await ParkingModel.create(body)
    res.send({data})
}; 


/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const ubdateItem = (req, res) =>{}; 


/**
 * ELiminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) =>{}; 

module.exports = { getItems, getItem, createItem, ubdateItem, deleteItem};
