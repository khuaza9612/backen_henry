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
      where:{userId:id,orderStatus:'created'}
    });
    if (!id || !order) return res.status(400).json({ msg: 'No orders found' });
    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  };
};

const putOrder = async (req, res, next) => {
  
  const { id } = req.params;
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
  });
  console.log(createdUsers)
  res.status(200).json({msg:'Usuario actualizado'});

}
  

const postOrder = async (req, res) => {
  try {
    const {
      productId,
      quantity, 
      idProduct,   
      
      orderStatus,
      totalPrice,
      userId,
      email,
       
    } = req.body;

    


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
  

    // let products= [];
    // for (let i = 0; i < productId.length; i++) {
    //   products.push(
    //     await Product.findOne({
    //       where: {
    //         id: productId[i]
    //       }
    //     })
    //   )
    // };
  
    
    const newOrder = await Order.create({
      
      idProduct: product.map(p => p.dataValues.id).join(", "),
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
      email:newOrder.email,
      orderStatus:newOrder.orderStatus,
      id:newOrder.id,
     


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