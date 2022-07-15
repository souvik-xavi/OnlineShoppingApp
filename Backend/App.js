const express = require('express')
const app = express()
const usersRoute = require('./Routes/User'); 
const productRoute =require('./Routes/Product');
const cartRoute = require('./Routes/Cart');
const orderRoute = require('./Routes/Order');
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(bodyParser.json())

app.use(cors())

require('dotenv').config();


const PORT = process.env.PORT || 8080;


app.use(usersRoute);
app.use(productRoute);
app.use(cartRoute);
app.use(orderRoute);
app.listen(PORT,()=>{
    console.log("Application Started",PORT)})
