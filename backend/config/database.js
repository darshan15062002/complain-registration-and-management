const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, }).then((data) => {
        console.log(`mongoDB connected with server ${data.connection.host}`);
    }).catch((er) => { console.log(er); })
}

module.exports = connectDB