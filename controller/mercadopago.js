const {User, Order} = require('../db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mercadopago = require('mercadopago');

const crearOrdem = async (req, res) => {
mercadopago.configure({
    access_token: 'APP_USR-7419291573046198-092100-8554f3e8313ed93845dc1f328d19dd32-1202275511'
   });
const {price}=req.body;

let preference = {
    items: [
        {
            title: 'test',
            quantity:1,
            currency_id: 'ARS',
            unit_price: price,
          
        },
    ],


        payment_methods:{
            excluded_payment_methods: [
                {
                  id: "atm"
                }
            ],
            installments: 6, //cantidad maximo de cuotas
        },
        back_urls:{
             success: "https://athens-vytr1lsws-ingmsaac-gmailcom.vercel.app/purchase",
            failure: "https://athens-theta.vercel.app",
            pending: "https://athens-theta.vercel.app",
        }
};

mercadopago.preferences.create(preference)
.then(function(response){
    // {url: response.body.init_point}
    res.status(200).json({url: response.body.init_point});
}).catch(function(error){
    //console.log(error);
});
}
const notificacionOrden = async(req, res) => {
    const datos = req.query;

    console.log(datos);
    res.status(200)
}
module.exports={
    notificacionOrden,
    crearOrdem
     };