const jwt = require("jsonwebtoken");
const User = require('../models/userModal');
const constants = require('../constants');

module.exports.authenticate = async(req,res,next) => {
   const response = constants.defaultServerResponse;
   const authHeader = req.headers["authorization"];
   const token = authHeader && authHeader.split(" ")[1];
   try{
       if(!token) throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
       const decoded = jwt.verify(token,process.env.SECRET_KEY);
       next();
   }catch(error){
       console.log("Authentication error ",error);
       response.status = 401;
       response.message = error.message
       res.status(response.status).send(response);
   }
}

