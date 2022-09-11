// // const { Order,User,Product,Order_Line } = require('../db');

// // // const getOrderById = async (req, res) => {
// // //     try {
// // //         const { id } = req.params;
// // //         const order = await Order.findByPk(id);

// // //         if (!id || !order) return res.status(400).json({ msg: 'No encontramos tu Orden' });
        
// // //         res.status(200).json(order);
// // //     } catch (error) {
// // //         res.status(500).json(error);
// // //     };
// // // };

// // // const putOrder = (req, res, next) => {
// // //     Order.update({
// // //         totalAmount: req.body.totalAmount,
// // //         adressShipping: req.body.adressShipping,
// // //         ordersInfo: req.body.ordersInfo
// // //     }, {
// // //         returning: true, 
// // //         where: {
// // //             id: req.params.id
// // //         } 
// // //     })
// // //     .then(function([ rowsUpdate, [updatedOrder] ]) {
// // //         res.json(updatedOrder)
// // //     })
// // //     .catch(next);
// // // };

// // //const postOrder = async (req, res) => {
// //     try {
// //         const { 
// //             pago_total,
// //             adressShipping,
// //             orderStatus,
// //             userId
// //             } = req.body;
            
// //     const user = await Order.findAll({
// //         where: { userId: userId},
// //       });

// //         const newOrder = await Order.create(
// //             { 
// //                 pago_total,
// //                 adressShipping,
// //             orderStatus,
// //             userId
// //             }
// //         );
// //         res.status(200).send('Created!');
// //     } catch (error) {
// //         res.status(409).send(error);
// //     };
// // //};
// // const { Router } = require("express");
// // //const {Usuario, Producto, Talle, Compra, Order_Line } = require("../db.js");

// const postOrder=async (req,res)=>{
//   try {
    

//     let { product, Userid, adressShipping,  } = req.body;

   

//     console.log(req.body);

//     let total = 0

//     for(let i = 0; i < product; i++){
//       const productoTalle = await Product.findOne({
//         where: {
//           id: product[i].productId,
//         },
//         // include: {
//         //   model: Talle,
//         //   where: {
//         //     talle: product[i].talle,
//         //   }
//         // }
//       });
//       //Me fijo si encontré un producto que requeria esa y que tenga stock. Si no lo hago en algún caso, devuelvo un error.
//     //   if(!productoTalle || (productoTalle.talles[0].dataValues.producto_talle.dataValues.stock - productos[i].cantidad) < 0) 
//     //     return res.status(400).send({Error: "Lo sentimos. El producto seleccionado está agotado."})
//     //   //Sumo el total del precio
//       total += product[i].cantidad * productoTalle.price
//     }

//     // const pedido = await User.create({
//     //     pago_total: total,
//     //   //Si me pasan direccion de envio la pongo, si no uso la del user.
//     //   adressShipping: adressShipping,
//     //   //Suponemos que esto se crea justo despues de la pasarela de pago, por lo que estaría aprobado.
//     //   orderStatus: "created",
//     //   //tipo de envio
      
//     // });

//     //Creo una compra por cada producto
//     for(let i = 0; i < product.length; i++){
     
//       await Order_Line.create({
//         productoId:Order_Line[i].productId,
       
//         cantidad: product[i].quantity,
//         orderId: pedido.dataValues.id
//       })
//     }

//     //Busco todas las compras donde el id del pedido sea el que acabo de crear y despues lo mando junto al pedido.
//     const compras = await Order_Line.findAll({
//       where: {
//         orderId: pedido.dataValues.id
//       }
//     })

//     res.status(200).send({order: pedido, Order_Line: compras});
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// };



// module.exports = {
//     // getOrder,
//     // getOrderById,
//     // putOrder,
//     postOrder
// };