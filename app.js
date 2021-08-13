const express = require("express")
const app = express()
const port = 80
const path = require("path")
const hbs = require("hbs")

const static_path = path.join(__dirname,"./public")
const partial_path = path.join(__dirname,"./template/partial")
const view_path = path.join(__dirname,"./template/views")

app.set("view engine","hbs")
app.set("views",view_path)
hbs.registerPartials(partial_path)

app.use(express.static(static_path))


app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/dic",(req,res)=>{
    res.render("dic")
})
app.get("*",(req,res)=>{
    res.render("error")
})

app.listen(port,()=>{
    console.log(`App is running succesfully at port ${port}`)
})