import express from 'express';
import {readdirSync} from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
// import { Db } from 'mongodb';
const morgan = require('morgan');
require("dotenv").config();
var cookieParser =require('cookie-parser');
var csrf = require('csurf');

// const csrfProtection= csrf({cookie:false});
const csrfProtection= csrf({cookie:true});

//create express app
const app = express();

//cookie-parser middleware
app.use((req,res, next)=>{
    console.log(req.body)
    next()
})
// app.use(cookieParser());
// app.use(csrfProtection);


//Database
mongoose.connect(process.env.DATABASE || `mongodb://127.0.0.1:27017/saviblog`, {
    // userNewUrlParser:true,
    // useFindAndModify:false,
    // useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(()=>console.log('DB CONNECTED'))
    .catch((err)=>console.log(err));

//apply middlewares
app.use(cors());

app.use(express.json({limit:'5mb'}));

app.use(morgan("dev"));


//set cross origin

// app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });
//route
// app.use(function (req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken())
//   })
readdirSync('./routes').map((r)=> 
    app.use('/api', require(`./routes/${r}`))
);


const port = process.env.PORT || 8000;

app.listen(port, ()=>console.log(`Server is running on port ${port}`));


