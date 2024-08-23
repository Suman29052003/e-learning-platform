const express = require('express');
const app = express();
const dotenv = require('dotenv');
const databaseConnection = require('./database/dbConnection');
const bodyParser = require('body-parser');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
dotenv.config()
const port = process.env.PORT || 8000

app.use(cors({
    origin: '*',
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/user', userRoutes)

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})
databaseConnection()