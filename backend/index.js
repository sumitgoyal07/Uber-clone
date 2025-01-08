const express = require('express');
const dotenv = require('dotenv');
const User = require('./routes/routes');
const Driver = require('./routes/driverRoute');
const cookieParser = require('cookie-parser');


dotenv.config();
const app = express();
const connection = require('./config/DB');

const port = process.env.PORT;
connection();

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/user' , User);
app.use('/api/v2/driver' , Driver);





app.listen(port , ()=>{

     console.log(`Server listen at ${port}`);
});
