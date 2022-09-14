const { Factura, Order } = require('../db.js');


const postbill= async (req, res) => {
    const { name, lastName, email, address, zip, city, celNumber, totalAmount, observations,orderId} = req.body;
   
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
    res.status(200).send(facturas);
};

const getBill = async (req, res) => {
    const facturas = await Factura.findAll();
    res.status(200).send(facturas);
};

const getBillById = async (req, res) => {
    const { id } = req.params;
    const facturas = await Factura.findByPk(id);
    res.status(200).send(facturas);
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