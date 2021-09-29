const { Flower } = require("../models/flower")

//need to fix the errors


async function getFlowersAll(data) {

    const response = await Flower.findAll()

    return response

}


async function createFlower(data) {
    const response = await Flower.create(data)

    return response

}
async function getflowerBypk(data) {

    const response = await Flower.findByPk(data.name)

    return response
}


async function buyAFlower(data) {
    const flower = await getflowerBypk(data)
 //   console.log("querys ", flower.toJSON())
    if (flower)
        return {
            status: 200
        }
    return {
        status: 404,
        data: " sorry this flower does not exist anymore"
    }
}



async function deleteflower(data) {

    const response = await Flower.findByPk(data.name)
    if (response)
        response.destroy()
    return response
}


module.exports = {
    getFlowersAll,
    getflowerBypk,
    buyAFlower,
    createFlower,
    deleteflower
}