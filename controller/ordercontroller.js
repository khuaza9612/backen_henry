const { Order, Product, User } = require('../db');


const getOrder = async (req, res) => {
  try {
    const order = await Order.findAll();
    res.status(200).json(order);
  } catch (error) {
    res.status(404).send('No orders found')
  };
};

const getOrderById = async (req, res) => {
  try {
      const { id } = req.params;
      const order = await Order.findByPk(id);

      if (!id || !order) return res.status(400).json({ msg: 'No orders found' });
      
      return res.status(200).json(order);
  } catch (error) {
      res.status(500).json(error);
  };
};

const putOrder = (req, res, next) => {
    Order.update({
        orderStatus: req.body.orderStatus
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

const postOrder = async (req, res) => {
  try {
    const {
      productId,
      quantity,
      adressShipping,
      orderStatus,
      totalPrice,
      adressNumber,
      floor,
      department,
      zipCode,
      province,
      location,
      dni,
      userId
    } = req.body;

    //console.log(productId);

    let product = [];
    // for (let i = 0; i < productId.length; i++) {
    //   product.push(
    //     await Product.findOne({
    //       where: {
    //         id: productId[i]
    //       }
    //     })
    //   )
    // };
    
    //console.log('probando array' + product[0].dataValues.title);
    const newOrder = await Order.create({
      titleProduct: product.map(p => p.dataValues.title).join(", "),
      quantity,
      adressShipping,
      orderStatus,
      totalPrice,
      adressNumber,
      floor,
      department,
      zipCode,
      province,
      location,
      dni,
      userId
    });

    newOrder.addProduct(product)
    res.status(200).send('created')
  } catch (error) {
    //console.log(error)
    res.status(404).send(error);
  };
};


module.exports = { 
  getOrder, 
  getOrderById,
  putOrder, 
  postOrder,
};