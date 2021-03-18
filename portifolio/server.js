const express = require('express');
const nunjucks = require('nunjucks');
const certificados = require('./data');


const servidor = express();

servidor.use(express.static('public',))

servidor.set("view engine","njk");

nunjucks.configure("view", {
    express: servidor
})

servidor.get("/", (req , res)=>{
    return res.render("index")
})
servidor.get("/classes", (req , res)=>{
    return res.render("classes", { itens : certificados })
})

servidor.listen(5000,()=>{
    console.log("server is run");
})

