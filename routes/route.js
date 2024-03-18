const express = require('express')

const router = express.Router()


const {user} = require('../controller/control.js')

router.post("/save", user)


module.exports = router