
const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const MONGOURI=require("./config/keys").mongoURI; //CONEXION MONGO

const PORT=3000;//EN MAYUSCULA VARIABLE QUE AFECTA TODO EN EL SERVER
const app=express();
//IMPORTAR MODULO DE RUTASS
const {router} =require("./routes/routes"); //LLEVA {} SI EN EL ARCHIVO routers.js SE EXPORTA CON {}
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//CONECTAR MONGO
mongoose.connect(MONGOURI,{useNewUrlParser:true})
.then(()=>console.log("Conectado a MongoDB "))
.catch((err)=>console.log(err));

app.use('/',router);
///app.use('/users',users);//USUARIOS

app.listen(PORT,()=>{
    console.log(PORT);
});
