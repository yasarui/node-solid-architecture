const Product = require('../models/productModal');
const constants = require('../constants');
const { checkValidObjectId } = require('../helpers/dbHelper');

const createProduct = async(productData) => {
    try{
        const product = new Product({...productData});
        const result = await product.save();
        return result;
    }catch(error){
       console.log("Something went wrong Service:productService ",error);
       throw new Error(error);
    }
}

const getAllproducts = async({skip=0,limit=10}) => {
    try{
        const result = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return result;
    }catch(error){
        console.log("Something went wrong Service:getAllProducts ",error);
        throw new Error(error);
    }
}

const getProduct = async(id) => {
    try{
        checkValidObjectId(id);
        const result = await Product.findById(id);
        if(!result){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return result;
    }catch(error){
        console.log("Something went wrong Service:getProduct ",error);
        throw new Error(error);
    }
}

const updateProduct = async(id,updateInfo) => {
    try{
        checkValidObjectId(id);
        const result = await Product.findOneAndUpdate({_id:id},updateInfo,{new:true});
        if(!result){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return result;
    }catch(error){
        console.log("Something went wrong Service:updateProduct ",error);
        throw new Error(error);
    }
}

const deleteProduct = async(id) => {
    try{
        checkValidObjectId(id);
        const result = await Product.findByIdAndDelete(id);
        if(!result){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return result;
    }catch(error){
        console.log("Something went wrong Service:deleteProduct ",error);
        throw new Error(error);
    }
}

module.exports = {
    createProduct,
    getAllproducts,
    getProduct,
    updateProduct,
    deleteProduct
}