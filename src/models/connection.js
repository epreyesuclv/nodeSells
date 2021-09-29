require("dotenv").config()
const { USER, PASSWORD, PORT, DATABASE, DATABASEURI } = process.env



const { response } = require("express")
const { Sequelize } = require("sequelize")

const sequelize = function () {
    let sequelize
    try {

        console.log("connection ", DATABASEURI)
        sequelize = new Sequelize(DATABASEURI, {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false // <<<<<<< YOU NEED THIS
                }
            }

        })
        //sequelize.sync()

        return sequelize
    } catch (err) {
        console.log("connection ", err)

        sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
            host: 'localhost',
            dialect: 'postgres',
            port: PORT
        });

    } finally {
        
        return sequelize


    }

}()


module.exports = {
    sequelize
}