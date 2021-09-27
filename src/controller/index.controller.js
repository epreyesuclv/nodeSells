const { getFlowersAll, deleteflower,buyAFlower ,createFlower} = require("../fetchData/querys")
const { Flower } = require("../models/flower")


async function getFlowers(req, res) {

    const data = await getFlowersAll()

    res.status(200).json(data)


}

async function getflowerById(req, res) {
    const id = req.body.id || req.params.id

    const data = await getFlowersAll({
        id: id
    })
    res.status(200).json(data)
}

async function buyFlower(req, res) {

    const { name, address, amount,user } = req.body

    const data = await buyAFlower({
        id: name,
        address: address,
        amount: amount
    })

    res.status(data.status).send(data.data ?? "your flower will come soon")
}




async function create(req, res) {

    const data = req.body

    const flower = await createFlower(data)

    res.status(200).json(flower)

}



async function deleteF(req, res) {

    const name = req.body.id || req.params.id
    const flower = await deleteflower({ name: name })
    if (flower) {
        res.status(200).send("the flowers was deleted")
    } else {
        res.status(401).send("could'nt delete the flower")
    }

}



module.exports = {
    getFlowers,
    getflowerById,
    buyFlower,
    create,
    deleteF

}