const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();


dotenv.config();

app.use(cors({ origin: 'http://localhost:3000', }));
app.use(express.json());


//routes
const authRoute = require("./routes/AuthRoutes");

//using routes in the app
app.use("/api/v1/auth",authRoute);
const mongo_url = process.env.MONGO_URL

mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(4040);

});


app.get('/test',(req,res) => {
    res.json(String(mongo_url));
});




//TWmRKm2SG5WTnxoX