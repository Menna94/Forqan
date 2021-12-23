require('dotenv').config({path:'./config/config.env'});
const express = require('express');
const app = express();
const port = process.env.PORT | 3300;

// DB
const { DBConnection } = require('./config/db');
DBConnection();
//Routes
const RecipientRoutes = require('./Routes/recipient.routes');
const DonerRoutes = require('./Routes/doner.routes');

//configs
app.use(express.json());

//cors
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader(
        'Access-Control-Allow-Methods',
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    )
    next()
})

// mount routes
app.use('/api/v1/recipients', RecipientRoutes);
app.use('/api/v1/doners', DonerRoutes);

//
app.listen(
    port,
    console.log(`server is running on port ${port}`)
)


