const userModel = require('../model/model.js')


const isValidBody = (value) => {
    return Object.keys(value).length > 0
}

const user =  async function(req, res) {
try {
let data = req.body
if(!isValidBody(data)) return res.status(400).send({ status: false, msg: "enter some data." })
let result = await userModel.create(data)
res.status(200).send({result})
}

catch (err) {
    res.status(500).send({err})
}
}
    



module.exports.user = user
