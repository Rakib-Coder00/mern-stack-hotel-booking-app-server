const mongoose = require('mongoose');

let mongoURL = `mongodb+srv://rakib123:lojXYiGJWSFDl1rc
@cluster0.iiyer.mongodb.net/hotel_booking
`;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let connection = mongoose.connection;
connection.on('connected', () => {
    console.log('MongoDB is connected...');
})
connection.on('error', (err) => {
    console.log(err);
})
connection.on('disconnected', () => {
    console.log('MongoDB is disconnected...');
})

module.exports = mongoose;