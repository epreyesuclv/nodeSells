const { getFlowersAll } = require("../fetchData/querys")


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

    const { name, adress, amount } = req.body
    const data = await buyAFlower({
        name: name,
        adress: adress,
        amount: amount
    })

    res.status(data.status).send(data.data ?? "your flower will come soon")
}




async function create(req, res) {
    //todo
}



async function deleteflower(req, res) {
    //todo
}



module.exports = {
    getFlowers,
    getflowerById,
    buyFlower,
    create,
    deleteflower

}