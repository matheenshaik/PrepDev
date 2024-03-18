const express = require('express')

const router = express.Router()


const {user,getUser} = require('../controller/control.js')

router.post("/save", user)
router.get("/get", getUser)


module.exports = router