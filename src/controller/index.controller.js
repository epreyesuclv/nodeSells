const { getFlowersAll, deleteflower, buyAFlower, createFlower, getflowerBypk } = require("../fetchData/querys")


async function getFlowers(req, res) {
    try {
        const data = await getFlowersAll()
        res.status(200).json(data)
    }

    catch (err) {
        res.status(503).json("server Error")
        console.log("index.controller", err)
    }

}

async function getflowerById(req, res) {
    try {
        const id = req.body.id || req.params.id || ""

        const data = await getflowerBypk({
            name: id
        })
        res.status(200).json(data)
    }

    catch (err) {
        res.status(503).json("server Error")

        console.log("index.controller", err)
    }

}

async function buyFlower(req, res) {
    try {
        const { name, address, amount, user } = req.body

        const data = await buyAFlower({
            id: name,
            address: address,
            amount: amount
        })

        res.status(data.status).send(data.data ?? "your flower will come soon")
    }

    catch (err) {
        res.status(503).json("server Error")

        console.log("index.controller", err)
    }

}




async function create(req, res) {
    try {
        const data = req.body

        const old = await getflowerBypk(data)
        console.log("index.controller - create", old)
        if (old)
            res.status(409).send("this flower already exist")

        const flower = await createFlower(data)

        res.status(200).json(flower)
    }

    catch (err) {
        res.status(503).json("server Error")

        console.log("index.controller", err)
    }


}



async function deleteF(req, res) {
    try {
        const name = req.body.name || req.params.name
        const flower = await deleteflower({ name: name })
        if (flower) {
            res.status(200).send("the flowers was deleted")
        } else {
            res.status(409).send("could'nt delete the flower")
        }
    }

    catch (err) {
        console.log("index.controller", err)
    }


}



module.exports = {
    getFlowers,
    getflowerById,
    buyFlower,
    create,
    deleteF

}