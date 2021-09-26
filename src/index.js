const { request } = require("express")
const express = require("express");
const { register, login } = require("./jwt/authentication/auth");

//database connection
require("dotenv").config()
//require("./jwt/config/databaseQuerys").connect();
require("./models/connection.js").sequelize.sync()

//port config
const { API_PORT } = process.env
const port = API_PORT


//server
const app = express()


//midalwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// rutas
app.use(require("./root/index"))
app.post("/register", register)
app.post("/login", login)

//runserver
app.listen(port, () => {
    console.log('server is runnig on port ' + port)
})