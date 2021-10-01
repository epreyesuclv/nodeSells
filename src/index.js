const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { changePass, login } = require("./jwt/authentication/auth");
const { checkConnectin } = require("./jwt/middleware/databaseconnectionchek");

//database connection
require("dotenv").config()
//require("./jwt/config/databaseQuerys").connect();

//port config
const { API_PORT } = process.env
const port = API_PORT


//server
const app = express()
const { apiDocumentation } = require('../doc/apidoc.js')
//for documentation with swagger
const swaggerui = require("swagger-ui-express")

app.use("/doc", swaggerui.serve, swaggerui.setup(apiDocumentation))



//midalwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// rutas
app.use(require("./root/index"))
app.post("/login", login)
app.post("/change", changePass)

//runserver
app.listen(port, () => {
    console.log('server is runnig on port ' + port)

})