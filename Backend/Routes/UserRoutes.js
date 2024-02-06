const express = require("express")
const router = express.Router()
const {SignUp, Login, editacc} = require("../Controllers/UserController")
const verifyToken = require("../Middlewares/VerifyToken")

router.post("/sign-up", SignUp)
router.post("/login", Login)
// Private Route
router.post("/editAcc", verifyToken, editacc)

module.exports = router

