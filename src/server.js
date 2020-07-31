const dbConnection = require("./db/connection");
const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute");
const userRoute = require('./routes/userRoute');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const swagger_path = path.resolve(__dirname,"./swagger.yaml");
const swaggerDocument = YAML.load(swagger_path);

//db connectivity
dbConnection();

//Init app
const app = express();
const port = process.env.port;

//cors
app.use(cors());

//request payload middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/v1/user',userRoute);
app.use('/api/v1/products',productRoute);

//API DOCUMENT
if(process.env.NODE_ENV != 'production'){
    app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
}


app.listen(port,()=>{
    console.log(`Server is up and Running on Port ${port}`);
})

//Global Error handling Middleware
app.use(function(err,req,res,next){
   console.log(err.stack);
   res.status(500).send({
       status:500,
       message:err.message,
       body:{}
   })
})