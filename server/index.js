const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const path = require("path");
const app = express();
const {logger,logEvents} = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose')
dotenv.config();

connectDB();
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
//static files
app.use('/',express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/root'));



//routes
const authRoute = require("./routes/AuthRoutes");
const userRoute = require('./routes/UserRoutes');
//using routes in the app
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/user",userRoute);


//not found route
app.all('*',(req,res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname,'views','404.html'));
  }else if(req.accepts('json')){
    res.json({message : '404 Not Found'});
  }else{
    res.type('txt').send('404 Not Found');
  }
})

app.use(errorHandler);


const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(4040,()=>{
    console.log(`server listning on port 4040`)
  });
  
});
db.on('error', err => {
  console.log(err);
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,'mongoErrLog.log');
});







//TWmRKm2SG5WTnxoX