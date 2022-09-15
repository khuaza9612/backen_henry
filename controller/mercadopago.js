const {User} = require('../db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mercadopago = require('mercadopago');

const crearOrdem = async (req, res) => {
mercadopago.configure({
    access_token: 'TEST-5921674850639301-091419-f199920e880f57be6ec4b5437ef230e4-1198594613'
});
const {price}=req.body;

let preference = {
    items: [
        {
            title: 'test',
            quantity:1,
            currency_id: 'ARS',
            unit_price: 120
        }
    ],
    notification_url: "",

};

mercadopago.preferences.create(preference)
.then(function(response){
    res.status(200).json(response);
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