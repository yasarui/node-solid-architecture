const User = require('../models/userModal');
const constants = require('../constants');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signUpUser = async ({email,password}) => {
   try{

        const user = await User.findOne({email});
        if(user){
            throw new Error(constants.userMessage.DUPLICATE_EMAIL);
        }
        const hashPassword = await bcrypt.hash(password,8);
        const newUser = new User({email,password:hashPassword});
        const result = await newUser.save();
        return result;
   }catch(error){
       console.log("Something went wrong userService: singUpService");
       throw new Error(error.message);
   }
}

module.exports.signInUser = async ({email,password}) => {
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        const isValid = await bcrypt.compare(password,user.password);
        if(!isValid) {
            throw new Error(constants.userMessage.INVALID_PASSWORD);
        }
        const token = jwt.sign({_id:user.id},process.env.SECRET_KEY);
        return {token};
   }catch(error){
       console.log("Something went wrong userService: singUpService");
       throw new Error(error.message);
   }
}