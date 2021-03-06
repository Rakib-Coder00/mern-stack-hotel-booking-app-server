//create express server
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const dbConfig = require('./db');
const roomsRoute = require('./routes/roomsRoute');

app.use('/api/rooms', roomsRoute);
const port = process.env.PORT || 5000;

//Middleware ==>
// app.use(cors());
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Express Server is running...🔥');
// })
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})