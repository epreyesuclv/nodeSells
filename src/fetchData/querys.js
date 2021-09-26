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
    const flower = await getflowerBypk(data.name)

    if (flower)
        return {
            status: 200
        }
    return {
        status: 404,
        data: " sorry this flower does not exist anymore"
    }
}

module.exports = {
    getFlowersAll,
    getflowerBypk,
    buyAFlower
}