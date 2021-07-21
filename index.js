//Imports
const express = require('express');
const app = express();
const Restaurant = require('./models/restaurant')

//Configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Controllers
const restaurantController = require('./controllers/restaurant');
app.use('/restaurants', restaurantController);

//Ports
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Port happening on ${port}`)
});