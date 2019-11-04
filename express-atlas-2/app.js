const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//database connection
const url = "mongodb+srv://niz_06:nisa06122001@cluster0-2icdr.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const database = mongoose.connection
database.on('error', (error) => console.error(error))
database.once('open', () => console.log('connected to database'))

app.use(express.json())
app.use(cors())

const dramaRouter = require('./routes/drama_routes')
app.use('/drama', dramaRouter)

app.listen(3002, () => console.log('server started'))