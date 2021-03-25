const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const bikes = require('./routes/bikes')
const cancelRoutes = require('./routes/cancel')
const rentRoutes = require('./routes/rent')
const deleteRoutes = require('./routes/delete')
const userRoutes = require('./routes/user')

const bodyParser = require('body-parser')

const keys = require('./keys')

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.options('*', cors())

app.use('/bikes', bikes)
app.use('/cancel', cancelRoutes)
app.use('/rent', rentRoutes)
app.use('/delete', deleteRoutes)
app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000;

console.log(process.env.PORT)

async function start () {
    try {
        await mongoose.connect( keys.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })

        app.listen(PORT, () => {
            console.log(`server is running on port: ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()