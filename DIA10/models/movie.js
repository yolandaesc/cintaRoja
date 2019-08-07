const mongoose=require("mongoose");
const Schema=mongoose.Schema; //MANERA QUE DESCRIBE LA INFORMACION
const ObjectId=mongoose.ObjectId; //GENERA ID- genera string aleatorio

const movieSchema=new Schema({
    movieId:ObjectId,
    title:String,
    year:Number,
    decription:{
        type:String
    },
    image:[String],
    theme:{
        type:String,
        enum: ["Comedia", "Drama", "Terror", "Accion"] //enum palabra reservada

    },
    director:{
        type:String,
        default:"Yolanda Escalante"
    }
});

const Movie=mongoose.model('Pelicula',movieSchema);
module.exports={Movie};