const { Order, Product, User } = require('../db');
const {Orderemail,PutOrderemail}=require('../utils/email.js');


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

const getOrderUserIds = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findAll({
      where:{userId:id}
    });
    if (!id || !order) return res.status(400).json({ msg: 'No orders found' });
    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  };
};

const putOrder = async (req, res, next) => {
  
  const { id } = req.params;
  const { orderStatus } = req.body;
  

  const putOrders=await Order.update({ 
    orderStatus }, 
    { where: { id } })
    console.log(putOrders)
    
  const createdUsers = putOrders.dataValues;
  console.log(putOrders)
  PutOrderemail({
    
    orderStatus:putOrders.orderStatus,
  });
  
  res.status(200).json({msg:'Usuario actualizado'});
  

}
    // const prueba=Order.update({
    //     orderStatus: req.body.orderStatus
    // }, {
    //     returning: true, 
    //     where: {
    //         id: req.params.id
    //     } 
    // })
   
    
    // .then(function([ rowsUpdate, [updatedOrder] ]) {
    //     res.json(updatedOrder)
    // })
    // const createdUser = prueba.dataValues;
    // PutOrderemail({
     
    //   orderStatus: req.body.orderStatus,
      
     
    // });


const postOrder = async (req, res) => {
  try {
    const {
      productId,
      quantity,
      adressShipping,
      orderStatus,
      totalPrice,
      userId
    } = req.body;

    //console.log(productId);

    let product = [];
    for (let i = 0; i < productId.length; i++) {
      product.push(
        await Product.findOne({
          where: {
            id: productId[i]
          }
        })
      )
    };
    
    //console.log('probando array' + product[0].dataValues.title);
    const newOrder = await Order.create({
      titleProduct: product.map(p => p.dataValues.title).join(", "),
      quantity,
      adressShipping,
      orderStatus,
      totalPrice,
      userId
    });
    
    newOrder.addProduct(product)
    

    const createdUser = newOrder.dataValues;
   
    
    Orderemail({
      totalPrice:newOrder.totalPrice,
      titleProduct:newOrder.titleProduct,
     


    })

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
  getOrderUserIds
};