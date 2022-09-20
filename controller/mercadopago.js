const {User, Order} = require('../db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mercadopago = require('mercadopago');

const crearOrdem = async (req, res) => {
mercadopago.configure({
    access_token: 'TEST-8953325836341813-092018-0e61816b4728dd8c7ca27308b81f1cae-1198591985'
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
             success: "https://athens-theta.vercel.app/purchase",
            failure: "https://athens-5qhdwams0-ingmsaac-gmailcom.vercel.app/",
            pending: "https://athens-5qhdwams0-ingmsaac-gmailcom.vercel.app/",
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