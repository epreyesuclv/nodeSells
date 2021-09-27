const { sequelize } = require("./connection")
const { Model, DataTypes } = require("sequelize")


class Flower extends Model { }

Flower.init({
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    region: DataTypes.STRING,
    color: DataTypes.STRING


}, {
    sequelize,
    modelName: "Flower"
}

)

module.exports = {
    Flower
}