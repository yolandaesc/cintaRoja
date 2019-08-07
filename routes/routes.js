const express=require("express");
const router=express.Router();

const {Movie}=require("../models/movie");


router.get("/", (req,res)=>{
   // res.status(200).sendFile("./views/index.html");
    res.status(200).send({response:"Corriendo"});
});
//Create
router.post("/api/v1/pelicula",(req,res)=>{
    const {title,year,decription,image,theme,director}=req.body;
    const newMovie=Movie({
        title,
        year,
        decription,
        image,
        theme,
        director
    });

    //GUARDA REGISTRO A BD
    newMovie.save((err,pelicula)=>{
        err?res.status(409).send(err.message):res.status(201).send(pelicula);
       // console.log(err);
    });
    console.log(req.body);
    
    //  res.status(200).send({response:"Post mi 1"});
});
//Read
router.get("/api/v1/pelicula",(req,res)=>{
    Movie.find().exec()
    .then(movies=>res.status(200).send(movies))
    .catch(err=>res.status(404).send(err));
});


router.get("/api/v1/peliculaById/",(req,res)=>{
    const {id}=req.query;
    Movie.findById(id).exec()
    .then(movies=>res.status(200).send(movies))
    .catch(err=>res.status(404).send(err));
//res.status(200).send({"test":"ok"});
});

router.get("/api/v1/busqueda/pelicula",(req,res)=>{
    const {q}=req.query;
    console.log(q);
    Movie.find({title:q}).exec()
    .then(movie=>{
        movie.length>0?
            res.status(200).send(movie)
            :res.status(404).send("Not found")
        
    })
    .catch(err=>res.status(404).send(err));
});
//Update
//put modifica todo el registro
router.put("/api/v1/pelicula/update",(req,res)=>{ //lo correcto es put o post
    const {id}=req.query;//body es de una URL
    const body=req.body;//body es de un Json
    Movie.findByIdAndUpdate(id,{$set:body},{new:true})
        .then(NewMovie=>{
            NewMovie!==null?
            res.status(200).send(NewMovie)
            :res.status(304).send("Not found")
        })
        .catch(err=>res.status(404).send(err));
});

router.patch("/api/v1/pelicula/update",(req,res)=>{ //modifica parcialmente el registro
    const {id}=req.query;//body es de una URL
    const body=req.body;//body es de un Json
    Movie.findByIdAndUpdate(id,{$set:body},{new:true})
        .then(NewMovie=>{
            NewMovie!==null?
            res.status(200).send(NewMovie)
            :res.status(304).send("Not found")
        })
        .catch(err=>res.status(404).send(err));
});

//Delete
router.delete("/api/v1/pelicula/delete",(req,res)=>{ 
    const {id}=req.query;//body es de una URL
    Movie.findByIdAndRemove(id).exec()
    .then(peli=>{
        peli!==null?
        res.status(200).send({mensaje:"Pelicula borrada exitosamente",body:peli})
        :res.status(304).send({mensaje:"Pelicula borrada exitosamente"})
    })
        .catch(err=>res.status(304).send({mensaje:"Pelicula borrada exitosamente"}));
});

//EXPORTAR MODULO DE RUTASS
module.exports={router};
