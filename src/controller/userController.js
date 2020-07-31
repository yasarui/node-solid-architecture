const userService = require('../service/userService');
const constants = require('../constants');

module.exports.signUpUser = async(req,res) => {
   const response = {...constants.defaultServerResponse};
   try{
       const responseFromService = await userService.signUpUser(req.body);
       response.status = 200;
       response.message = constants.userMessage.SIGNUP_SUCCESS;
       response.body = responseFromService;
   }catch(error){
    console.log("Something Went wrong userController:signUpUser ",error);
    response.status = 400;
    response.message = error.message       
   }
   res.status(response.status).send(response);
}

module.exports.signInUser = async(req,res) => {
    const response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await userService.signInUser(req.body);
        response.status = 200;
        response.message = constants.userMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
    }catch(error){
     console.log("Something Went wrong userController:signInUser ",error);
     response.status = 400;
     response.message = error.message       
    }
    res.status(response.status).send(response);
}