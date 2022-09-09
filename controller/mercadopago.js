const {User} = require('../db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mercadopago = require('mercadopago');

const crearOrdem = async (req, res) => {
mercadopago.configure({
    access_token: 'TEST-7297348892296136-090721-aa4217832aaed5215f291f69e9f6acd8-1194321094'
});

let preference = {
    items: [
        {
            title: 'test',
            quantity:1,
            currency_id: 'ARS',
            unit_price: 1.5
            
        }
    ],
    notification_url: "",

};

mercadopago.preferences.create(preference)
.then(function(response){
    console.log(response.body);
}).catch(function(error){
    console.log(error);
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