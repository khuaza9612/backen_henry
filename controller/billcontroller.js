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
        const bill = await Bill.findByPk(id);

        if (!id || !bill) return res.status(400).json({ msg: 'No encontramos tu Factura' });
        
        res.status(200).json(bill);
    } catch (error) {
        res.status(500).json(error);
    };
};

const putBill = (req, res, next) => {
    Bill.update({
        observations: req.body.observations
    }, {
        returning: true, 
        where: {
            id: req.params.id
        } 
    })
    .then(function([ rowsUpdate, [updatedBill] ]) {
        res.json(updatedBill)
    })
    .catch(next);
};

const postBillxOrder = async (req, res) => {
    try {
        const {  
            name, 
            lastName, 
            email, 
            adress, 
            celNumber, 
            buyersId, 
            totalAmount,
            adressShipping,
            ordersInfo,
            observations
        } = req.body;

        const newBill = await Bill.create(
            { 
                name, 
                lastName, 
                email, 
                adress, 
                celNumber, 
                buyersId, 
                totalAmount, 
                observations
            }
        );

        const newOrder = await Order.create(
            { 
                adressShipping,
                ordersInfo
            },
            {
                include: Bill,
            }
        );

        res.status(200).send('Created!');
    } catch (error) {
        res.status(409).send(error);
    };
};

module.exports = {
    getBill,
    getBillById,
    putBill,
    postBillxOrder
};