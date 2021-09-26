
const { Model, DataTypes } = require("sequelize")


class Flower extends Model { }

Flower.init({
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    region: DataTypes.STRING,
    color: DataTypes.STRING


})

module.exports = {
    Flower
}