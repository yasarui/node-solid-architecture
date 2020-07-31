const productService = require('../service/productService');
const constants = require("../constants");

module.exports.createProduct = async (req,res) => {
    const response = {...constants.defaultServerResponse};
    try{
       const responseFromService = await productService.createProduct(req.body);
       response.status = 200;
       response.message = constants.productMessage.PRODUCT_CREATED;
       response.body = responseFromService;
    }catch(error){
       console.log("Something Went wrong Controller:productController ",error);
       response.status = 400;
       response.message = error.message
    }
    return res.status(response.status).send(response);
}

module.exports.getAllProducts = async(req,res) => {
    const response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.getAllproducts(req.query);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_FETCHED;
        response.body = responseFromService;
    }catch(error){
       console.log("Something went wrong Controller:getAllProducts",error);
       response.status = 400;
       response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getProduct = async(req,res) => {
    const response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.getProduct(req.params.id);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_FETCHED;
        response.body = responseFromService;
    }catch(error){
        console.log("Something went wrong Controller:getProduct ",error);
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.updateProduct = async(req,res) => {
    const response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.updateProduct(req.params.id,req.body);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_UPDATED;
        response.body = responseFromService;
    }catch(error){
        console.log("Something went wrong Controller:updateProduct ",error);
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.deleteProduct = async(req,res) => {
    const response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.deleteProduct(req.params.id);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_DELETED;
        response.body = responseFromService;
    }catch(error){
        console.log("Something went wrong Controller:deleteProduct ",error);
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}