const app = require('./app')

const Port = process.env.PORT || 3000

const start = async() => {
    try {
        app.listen(Port, () => console.log(`Server is listening on port ${Port}.... `))
    } catch (error) {
        console.log(error)
    }
}

start()