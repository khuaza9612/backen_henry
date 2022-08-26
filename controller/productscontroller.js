const Product = require('../models/Product.js');
const { Router } = require('express');

const getproducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json(error);
    }
    }

const getproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!id || !product) {
            return res.status(400).json({ msg: 'No se ha especificado el id o Producto no econtrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!id || !product) {
            return res.status(400).json({ msg: 'No se ha especificado el id o Producto no econtrado' });
        }
        await product.destroy();
        res.status(200).json({ msg: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json(error);
    }
}

const postproduct = async (req, res) => {
    try {
        const { title, brand, image, description, price, discount, status, stock, genre, sport } = req.body;
        const product = await Product.create({ title, brand, image, description, price, discount, status, stock, genre, sport });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
       
}

const putproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const{ title, brand, image, description, price, discount, status, stock, genre, sport } = req.body;
        const product = await Product.findByPk(id);
        if (!id || !product) {
            return res.status(400).json({ msg: 'No se ha especificado el id o Producto no econtrado' });
        }
        await product.update({
            title,
            brand,
            image,
            description,
            price,
            discount,
            status,
            stock,
            genre,
            sport



           
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

const productname = async (req, res) => {
   
        const title = req.query.title;
        const totalProducts = await Product.findAll();
    
        if (title) {
          const productTiitle = await totalProducts.filter(e => e.title.toLowerCase().includes(title.toLowerCase()));
          productTiitle.length ?
            res.status(200).send(productTiitle) :
            res.status(404).send('No encontramos tu producto.');
        } else {
          res.status(200).send(totalProducts);
        };
      };
//     const title = req.query.title;
//     const product = await Product.findOne();
//     if (!title || !product) {
//         return res.status(400).json({ msg: 'No se ha especificado el id o Producto no econtrado' });
//     }
//     res.status(200).json(product);
// }
   

    
    
module.exports={
    getproducts,
    getproduct,
    deleteproduct,
    postproduct,
    putproduct,
    productname
    };

