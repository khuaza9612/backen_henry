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
      where: { userId:id }
    });
    if (!id || !order) return res.status(400).json({ msg: 'No orders found' });
    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  };
};

const putOrder = async (req, res, next) => {
  
  const { id } = req.params;
<<<<<<< HEAD
  const { orderStatus } = req.body;
  const putOrders=await Order.update({ 
    orderStatus
  }, {
    where: { id } 
  });
  console.log(putOrders)
    
  const createdUsers = putOrders.dataValues;
  console.log(putOrders)
  PutOrderemail({  
    orderStatus:putOrders.orderStatus,
=======
  const { orderStatus,email } = req.body;
  

  const putOrders=await Order.update({ 
   orderStatus, email }, 
    { where: { id } })
    console.log(orderStatus)


  const createdUsers =req.body.orderStatus;
  console.log(createdUsers)
  PutOrderemail({
    id:id,
    email:email,

    orderStatus:createdUsers,
>>>>>>> 9dfe894cd9c206b071fa68d9106b6fd7aeb1ac1a
  });
  console.log(createdUsers)
  res.status(200).json({msg:'Usuario actualizado'});
<<<<<<< HEAD
};
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

=======

}
  
>>>>>>> 9dfe894cd9c206b071fa68d9106b6fd7aeb1ac1a

const postOrder = async (req, res) => {
  try {
    const {
      productId,
      quantity,
      
      orderStatus,
      totalPrice,
      userId,
      email,
       
    } = req.body;

    // console.log(productId);

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
     
      orderStatus,
      totalPrice,
      userId,
      email,
    
    });
    
    newOrder.addProduct(product)

    const createdUser = newOrder.dataValues;
    
    Orderemail({
       
      totalPrice:newOrder.totalPrice,
      titleProduct:newOrder.titleProduct,
<<<<<<< HEAD
    });
=======
      email:newOrder.email,
      orderStatus:newOrder.orderStatus,
      id:newOrder.id,
     


    })
>>>>>>> 9dfe894cd9c206b071fa68d9106b6fd7aeb1ac1a

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