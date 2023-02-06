const express = require('express')
const app = express() ;
const tasks = require('./routes/tasks')
const connectDB = require('./db/connection')
require('dotenv').config()



//middleware
app.use(express.static('./public')) ;
app.use(express.json() ) ;



const port = 3000 ;

const startServer = async () =>{
     try{
          await connectDB(process.env.MONGO_URL) 
          app.listen(port, () => console.log( `U Listen at port ${port}`))
     } catch(error){
          console.log(error)
     }
}

startServer() ;




//routes
app.use('/api/v1/tasks', tasks)