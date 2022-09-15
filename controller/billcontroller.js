const { Bill, Order } = require('../db.js');


const getBill = async (req, res) => {
    const billNumber = req.query.billNumber;
    const allBills = await Bill.findAll({
        include: Order
    });
    console.log(allBills)
    if(billNumber) {
        const bill = await allBills.filter(e => e.billNumber == billNumber);

        bill.length ?
        res.status(200).send(bill) :
        res.status(404).send('No encontramos el número de Factura');

    } else res.status(200).send(allBills);
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