// const { Router } = require("express");
// const {User,Product, Compra  } = require("../db.js");
// const sequelize = require("sequelize");

// const router = Router();


// //const pedidos=async(req,res)=>{
//     try {
      

// const { productos, comprador, direccion_de_envio, id } = req.body;
// const user = await User.findAll({
//   where: { id: id },
// });
// for(let i = 0; i < productos.length; i++){

//     const productoTalle = await Product.findOne({
//       where: {
//         id: productos[i].productId,
//       },
     
//     });
//     //Me fijo si encontré un producto que requeria esa y que tenga stock. Si no lo hago en algún caso, devuelvo un error.
    
//     //Sumo el total del precio
//     total += productos[i].cantidad * productoTalle.price
//   }
// const pedido = await User.createPedido({
    
//     pago_total: total,
//     //Si me pasan direccion de envio la pongo, si no uso la del user.
//     direccion_de_envio: direccion_de_envio,
//     //Suponemos que esto se crea justo despues de la pasarela de pago, por lo que estaría aprobado.
//     estado: "Pendiente de pago",
//     //tipo de envio
//     tipo_de_envio: comprador.tipoDeEnvio
//   });

//   for(let i = 0; i < productos.length; i++){
//        await Compra.create({
//       productId: productos[i].productId,
//         cantidad: productos[i].cantidad,
//       pedidoId: pedido.dataValues.id
//     })
//   }
//   const compras = await Compra.findAll({
//     where: {
//       pedidoId: pedido.dataValues.id
//     }
//   })

//   res.status(200).send({pedido: pedido, compras: compras});
// } catch (error) {
//   console.log(error);
//   res.status(400).send(error);
// }
// //};

// module.exports={
//     pedidos
//     }