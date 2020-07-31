const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
     name: {
        type: String,
        required: true,
        trim: true     
     },
     price: Number,
     brand: String
},{
    timestamps: true
});

productSchema.methods.toJSON = function(){
    const product = this;
    const productObject = product.toObject();
    productObject.id = productObject._id;
    delete productObject._id;
    delete productObject.__v;
    delete productObject.createdAt;
    delete productObject.updatedAt;
    return productObject;
}

module.exports = mongoose.model("Product",productSchema);