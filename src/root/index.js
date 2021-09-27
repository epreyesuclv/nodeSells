const { Router, request } = require("express");
const { getFlowers, getflowerById, buyFlower, create, deleteflower, deleteF } = require("../controller/index.controller");
const router = Router();

const { verifyingToken } = require("../jwt/middleware/authToken")



router.get("/flowers", getFlowers)
router.get("/flowers/:id", getflowerById)
router.get("/flowers", getflowerById)


router.post("/buy", verifyingToken, buyFlower)


//only for owner use porpuse
router.post("/flowers", create)
router.delete("/flowers/:id", deleteF)
router.delete("/flowers", deleteF)

module.exports = router
