const express = require('express');
const ConnectDB = require('./config/DB')
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))



//calling the api
app.use('/api/useraccount', require('./routes/userRoutes'))
app.use('/api/room', require('./routes/roomRoutes'))
app.use('/api/booking', require('./routes/bookingRoute'))



app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`server is running on the port ${process.env.PORT}`);
})






