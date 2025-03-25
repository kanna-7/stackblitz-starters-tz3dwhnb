const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const menuRoutes = require('./router')
app.use('/api',menuRoutes)

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  try{
    await mongoose.connect(process.env.MONGO);
    console.log(`Example app listening at http://localhost:${port}`);
    console.log("server connected succeasfully");
  }catch(error){
    console.log('error',error)
  }
  
});
