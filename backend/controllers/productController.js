import Product from "../models/productModel.js";


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
    }
}

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after', runValidators: true})
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        console.error(error);
    }
}

export {getAllProducts, createProduct, updateProduct, deleteProduct};