const express = require("express");
const router = express.Router();
const apiSchemaValidation = require("../middlewares/apiSchemaValidation");
const productSchema = require('../apiSchema/productSchema');
const productController = require("../controller/productController");
const tokenValidation = require('../middlewares/auth');


router.post("/",
    apiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct
);

router.get("/",
    tokenValidation.authenticate,
    apiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
    productController.getAllProducts
);

router.get("/:id",
    tokenValidation.authenticate,
    productController.getProduct
);

router.put("/:id",
    tokenValidation.authenticate,
    apiSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.updateProduct
);

router.delete("/:id",
    tokenValidation.authenticate,
    productController.deleteProduct
);

module.exports = router;