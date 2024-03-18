const userModel = require('../model/model.js')


const isValidBody = (value) => {
    return Object.keys(value).length > 0
}

//create
const user =  async (req, res)=> {
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

//read
const getUser = async (req,res)=>{
    try{
        
        const data = await userModel.find()
        res.status(200).send({status:true, message:'Data collected', data})
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}
    



module.exports = {user, getUser}
