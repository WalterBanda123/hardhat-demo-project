require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const bodyParser = require('body-parser')
const cors = require('cors')

const DatabaseConnection = require('./database/DatabaseConnection')
const TestingRoutes = require('./routes/TestingRoutes')


const app = express()
app.use(cors('*'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))

app.use('/testing', TestingRoutes)
const PORT = process.env.PORT || 3500

async function main() {
    try {
        console.log('Database to start');
        await DatabaseConnection(process.env.MONGO_URL).then((value) => {
            app.listen(PORT, "0.0.0.0", () => {
                console.log(`Now Connected '${value.connections[0].db.namespace}'  && Server is running on port ${PORT}`);
            })
        })

    } catch (error) {
        console.error(error);
        console.log('Failed to connect to Database');
    }
}

main()



