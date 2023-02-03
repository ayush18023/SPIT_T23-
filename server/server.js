const express = require("express")
const morgan = require("morgan")


const app = express()

app.use(morgan("dev"))

app.listen(5000,()=>{
    console.log("Server started")
})

app.get("/",(req,res)=>{
    res.json({
        data:"Hello world"
    })
})