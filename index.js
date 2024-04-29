
const dbConnection =  require("./models/mongodb")
const express = require("express")
const app = express()

const serviceCategoryController = require("./controllers/serviceCategoryController")
const serviceController = require("./controllers/serviceController")

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/serviceCategories", serviceCategoryController);
app.use("/api/services", serviceController);
dbConnection()
app.listen(3000, () => console.log('Server started on port 3000'));

