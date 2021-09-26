const { Flower } = require("../models/flower")

//need to fix the errors


async function getFlowersAll(data) {

    const response = await Flower.findAll()

    return response

}



async function getflowerBypk(data) {

    const response = await Flower.findByPk(data.id)

    return response
}


async function buyAFlower(data) {
    
}

module.exports = {
    getFlowersAll,
    getflowerBypk,
    buyAFlower
}