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
    
}

module.exports = {
    getFlowers,
    getflowerById,
    buyFlower
}