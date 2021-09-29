const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { changePass, login } = require("./jwt/authentication/auth");

//database connection
require("dotenv").config()
//require("./jwt/config/databaseQuerys").connect();

//port config
var port = process.env.PORT || 4001
var server_host = process.env.HOST || '0.0.0.0';


//server
const app = express()


//midalwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// rutas
app.use(require("./root/index"))
app.post("/login", login)
app.post("/change", changePass)

//runserver
app.listen(port, server_host, () => {
    console.log('server is runnig on port ' + port)

})