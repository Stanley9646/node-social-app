const express = require('express')
const mongoose= require('mongoose')
const helmet= require('helmet')
const morgan=require('morgan')
const connectDB = require('./db/connect');
const dotenv=require("dotenv");
const userRoute = require('./routes/users');
const authRoute =require('./routes/auth');
const postRoute = require('./routes/posts');
const app= express()


dotenv.config()
const port=3000

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use("/api/auth", authRoute);
app.use('/api/users' , userRoute)
app.use('/api/post', postRoute )


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})


app.listen(3000, () =>{
    console.log('server is running')
})

