const express = require("express")
const router = express.Router();

router.get("/",  (req, res)=>{
    res.send("Welcome to my api")
})

router.post("/signup", (req,res) =>{
    res.send("signup")
    console.log(req.body)
})



module.exports = router