const { sequelize } = require("./connection")

const { Model, DataTypes } = require("sequelize")



class User extends Model { }

User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: DataTypes.TEXT,
    token: DataTypes.TEXT
}, {
    sequelize,
    modelName: "User"
}

)


module.exports = {

    User
}