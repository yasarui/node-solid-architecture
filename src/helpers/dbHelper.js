const mongoose = require("mongoose");
const constants = require('../constants');

module.exports.checkValidObjectId = (id) => {
   if(!mongoose.Types.ObjectId.isValid(id)){
       throw new Error(constants.databaseMessage.INVALID_ID);
   }
}