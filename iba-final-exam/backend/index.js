const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

port = 8000;
app.use(express.json());
app.use(cors())


const poetryRouter = require('./routes/poetryRoute')

app.use("/api/poetry", poetryRouter);


mongoose.connect('mongodb://localhost/poetryDB').then(() => {console.log('Connected Successfully')}).catch(() => {console.log('connection error')});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });