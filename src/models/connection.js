require("dotenv").config()
const { USER, PASSWORD, PORT, DATABASE } = process.env

const { Sequelize } = require("sequelize")
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: PORT
});

console.log(`connecting : database, user , password`, [DATABASE, USER, PASSWORD])


module.exports = {
    sequelize
}