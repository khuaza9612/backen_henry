const axios = require ('axios');
const { Product } = require('../models/Product');
const sequelize = require('sequelize')

async function LoadDb(req, res) {
  try {
    {
      const prodApi = await axios.get('https://apimocha.com/gimasioapi/post');
      const ProductModel = prodApi.data.map((e) => {
        return {
          id: e.id,
          title: e.title,
          brand: e.brand,
          description: e.description,
          price: e.price,
          discount: e.discount,
          status: e.status,
          stock: e.stock,
          genre: e.genre,
          sport: e.sport
        };
      });
      ProductModel.forEach(async (e) => {
        await Product.Create({
          where: {
            id: e.id,
            title: e.title,
            brand: e.brand,
            description: e.description,
            price: e.price,
            discount: e.discount,
            status: e.status,
            stock: e.stock,
            genre: e.genre,
            sport: e.sport
          },
        });
      });
    };
    console.log('DB success')
  } catch (error) {
    res.send(error);
  };
};


module.exports= {LoadDb}