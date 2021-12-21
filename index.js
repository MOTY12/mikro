const app = require('./app')
const connectDatabase = require('./config/database')


//connecting to database
connectDatabase()


const Port = process.env.PORT || 3000

const start = async() => {
    try {
        app.listen(Port, () => console.log(`Server is listening on port ${Port}.... `))
    } catch (error) {
        console.log(error)
    }
}

start()