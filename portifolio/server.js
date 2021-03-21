const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./data');
const certificados = require('./data');


const servidor = express();

servidor.use(express.static('public',))

servidor.set("view engine","njk");

nunjucks.configure("view", {
    express: servidor,
    autoescape: true
})

servidor.get("/", (req , res)=>{
    const sobre = {
        img:"https://avatars1.githubusercontent.com/u/60072830?s=460&u=ff39584c1a406529e22694cdf463b9310b63692a&v=4",
        nome: "Danielle Oliveira",
        funcao: "Front-end Developer",
        descricao: "Desenvolvedora em busca de desafios e novos conhecimentos.",
        links:[
            {
                nome: "GitHub",
                url:"https://github.com/danielle-o-n"
            },
            {
                nome: "Linkedin",
                url:"https://www.linkedin.com/in/danielle-o-n/"
            }         
        ]
    }
    return res.render("index", {sobre})
})
servidor.get("/classes", (req , res)=>{
    return res.render("classes", { itens : certificados })
})
servidor.get("/certificados", (req, res)=>{
    const caminho = req.query.id
    const certificado = certificados.find((certificado)=>{
        if(certificado.caminho == caminho){
            return true;
        }
        if(!certificado){
            return res.send("certificado não encontrado");
        }
    })
    return res.render("certificados", {iten : certificado})
})

servidor.listen(5000,()=>{
    console.log("server is run");
})

