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
})


module.exports = {

    User
}