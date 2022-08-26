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
        const { name, description, price, stock } = req.body;
        const product = await Product.create({
            name,
            description,
            price,
            stock
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

const putproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock } = req.body;
        const product = await Product.findByPk(id);
        if (!id || !product) {
            return res.status(400).json({ msg: 'No se ha especificado el id o Producto no econtrado' });
        }
        await product.update({
            name,
            description,
            price,
            stock
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    };
};

const productname = async (req, res) => {
    try {
        const { name } = req.params;
        const product = await Product.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${name}%`
                }
            }
        });
        if (!name || !product) {
            return res.status(400).json({ msg: 'No se ha especificado el nombre o Producto no econtrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    };
};
   

    
    
module.exports = {
    getproducts,
    getproduct,
    deleteproduct,
    postproduct,
    putproduct,
    productname
};

