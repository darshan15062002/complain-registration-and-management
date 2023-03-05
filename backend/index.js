const app = require('./app')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
process.on('uncaughtException', (err) => {
    console.log(`Error ${err.message}`);
})
// config
dotenv.config({ path: "./backend/config/config.env" })

// connecting database
connectDB()


app.listen(process.env.PORT, () => {
    console.log(`server is runing on port:=${process.env.PORT}`);
})


// unhandle error

process.on('unhandledRejection', (err) => {
    console.log(`error ${err.message}`);
    console.log("suting down the server due to unhandle promis rejection");
    server.close(() => {
        process.exit(1)
    })
})