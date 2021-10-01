const { Router } = require("express");
const router = Router();

const { verifyingToken } = require("../jwt/middleware/authToken");


const { getFlowers, getflowerById, buyFlower, create, deleteF } = require("../controller/index.controller");
router.get("/flowers", getFlowers)
router.get("/flowers/:id", getflowerById)
//router.get("/flowers", getflowerById)


router.post("/buy", buyFlower)


//only for owner use porpuse
router.post("/flowers", verifyingToken, create)
router.delete("/flowers/:id", verifyingToken, deleteF)
router.delete("/flowers", verifyingToken, deleteF)

module.exports = router
