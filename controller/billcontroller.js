const { Factura, Order } = require('../db.js');
const {Billemail}=require('../utils/email.js');


const postbill= async (req, res) => {
    const { 
        name, 
        lastName, 
        email, 
        address, 
        zip, 
        city, 
        celNumber, 
        totalAmount, 
        observations, 
        orderId 
    } = req.body;
    const facturas = await Factura.create({
        name,
        lastName,
        email,
        address,
        zip,
        city,
        celNumber,
        totalAmount,
        observations,
        orderId,
    });
    const createdUser = facturas.dataValues;
    Billemail({
        name:facturas.name,
        lastName:facturas.lastName,
        email:facturas.email,
        id:facturas.id,
        address:facturas.address,
        orderId:facturas.orderId,
        city:facturas.city,
        totalAmount:facturas.totalAmount,
    });
   
    res.status(200).send(facturas);
};

const getBill = async (req, res) => {
    const facturas = await Factura.findAll();
    res.status(200).send(facturas);
};

const getBillById = async (req, res) => {
    try {
        const { id } = req.params;
        const facturas = await Factura.findByPk(id);
        if (!id || !facturas) return res.status(400).json({ msg: 'No orders found' });
        return res.status(200).json(facturas);
    } catch (error) {
        res.status(500).json(error);
    };
    
};

const putBill = async (req, res) => {
    const { id } = req.params;
    const {observations } = req.body;
    const facturas = await Factura.update({
        observations
    }, {
        where: { id: id }
    });
    res.status(200).send({ message: 'Factura actualizada' });
};

module.exports = {
    getBill,
    getBillById,
    postbill,
    putBill
};