const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
     email: String,
     password: String
},{
    timestamps: true
});

userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    userObject.id = userObject._id;
    delete userObject._id;
    delete userObject.__v;
    delete userObject.password;
    return userObject;
}

module.exports = mongoose.model("User",userSchema);