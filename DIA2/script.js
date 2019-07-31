
// var Jupiter={
//     epoca:"J200",
//     masa:2.3,
//     temperatura:{
//         minima:"110 K -163.15 C",
//         media:"152 K -121.15 C",
//         maxima:"198 K -75.15 C"
//     }
// };

// var saturno={
//     epoca:"S100r",
//     masa:2.3,
//     temperatura:{
//         minima:"110 K -163.15 C",
//         media:"152 K -121.15 C",
//         maxima:"198 K -75.15 C"
//     }
// };

//CLASE
class Planeta{
    constructor(nombre,masa,epoca, min=0, max=20, med=10, image="https://upload.wikimedia.org/wikipedia/commons/5/5a/Jupiter_by_Cassini-Huygens.jpg"){
        this.nombre=nombre,
        this.masa=masa + " toneladas",
        this.epoca=epoca,
        this.image=image,
        this.temperatura={
            min:min,
            max:max,
            med:med
        }
    };
    //METODO
    rotar(){
        console.log("Estoy Rotando");
    };
    obtenAnioPlaneta(){
        return this.temperatura.max*1.2;
    };
};

//LLAMADA DE CLASE
var jupiter=new Planeta("Jupiter",2.3,"J200");
var saturno=new Planeta("Saturno",89.03,"S600");
var neptuno=new Planeta("Neptuno",93.03,"N700");
// console.log(jupiter);
// console.log(saturno);

// //METODOS
// jupiter.rotar();
// var algo=jupiter.obtenAnioPlaneta();
// console.log(algo);

// var agua=new Bebida("Agua natural", 600);
// var cerveza=new BebidaAlcoholica("Cerveza", 600, 15, true);
// var coca=new Refresco("CocaCola", 1000, "cola", 20, "https://estrategafinanciero.com/wp-content/uploads/2015/05/drop-of-water-261860_1280.jpg");
// // console.log(coca);

document.getElementById("p1").src=jupiter.image;
document.getElementById("title1").innerHTML=jupiter.nombre;
document.getElementById("desc1").innerHTML="epoca "+jupiter.epoca;
document.getElementById("p2").src=saturno.image;
document.getElementById("title2").innerHTML=saturno.nombre;
document.getElementById("desc2").innerHTML="epoca "+saturno.epoca;
document.getElementById("p3").src=neptuno.image;
document.getElementById("title3").innerHTML=neptuno.nombre;
document.getElementById("desc3").innerHTML="epoca "+neptuno.epoca;
