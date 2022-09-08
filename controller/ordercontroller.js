const { Order } = require('../db');

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);

        if (!id || !order) return res.status(400).json({ msg: 'No encontramos tu Orden' });
        
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    };
};

const putOrder = (req, res, next) => {
    Order.update({
        totalAmount: req.body.totalAmount,
        adressShipping: req.body.adressShipping,
        ordersInfo: req.body.ordersInfo
    }, {
        returning: true, 
        where: {
            id: req.params.id
        } 
    })
    .then(function([ rowsUpdate, [updatedOrder] ]) {
        res.json(updatedOrder)
    })
    .catch(next);
};

// const postOrder = async (req, res) => {
//     try {
//         const { 
//             totalAmount,
//             adressShipping,
//             ordersInfo
//             } = req.body;

//         const newOrder = await Order.create(
//             { 
//                 totalAmount,
//                 adressShipping,
//                 ordersInfo
//             }
//         );
//         res.status(200).send('Created!');
//     } catch (error) {
//         res.status(409).send(error);
//     };
// };


module.exports = {
    // getOrder,
    getOrderById,
    putOrder,
    // postOrder
};