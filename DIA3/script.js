// ECMASCRIP6
//var nomb="";
let nom="Yolanda"; // let suple al var
const pi=3.1415914159;

// function imprimeNom(){
//     console.log(nom);
// }

/*ARROW FUNCTION*/
//DEFINIR FUNCIONES EN ES6 IceCulshion
let imprimeNom=()=>{
    console.log(nom);
}
let impNom=()=>{
    return nom;
}
let impNoms=()=>nom;// solo cuando es una linea de codigo
let impNomss=nombre=>nombre; //solo funciona con un parametro
let imprime=(nombre,edad)=>{
    return "mi nombre es: "+nombre+" y mi edad es "+edad;
}
//console.log(imprime("Yola",35));

//imprimeNom();



//IMPRIMIR LOS 100 PRIMEROS NUMEROS
//MULTIPLOS DE 2 "FIZZ"
//MULTIPLO DE 5 "BUZZ"
//MULTIPLO DE 2 Y 5 "FIZZBUZZ"
//0,1,FIZZ,3,4,BUZZ,...,9,FIZBUZZ

let impNum=()=>{
    for(let i=0;i<=100;i++){
        if(i%2==0){
            if(i%5==0){
                console.log("FizzBuzz");
            }else{
                console.log("Fizz");
            }
        }else if(i%5==0){
            if(i%2==0){
                console.log("FizzBuzz");
            }else{
                console.log("Buzz");
            }
        }else{
            console.log(i);
        }
    }
}
//impNum();

//DEBGOS// configurar server para varias aplicaciones
//probesi web apps .. o .. abswebs: buscar se refier a las aplicaciones para cel que trabajan sin internet(cache)


//FULLSTAC ???? BACKEND Y FRONTEND?
//FUNCION QUE CONVIERTE DECIMAL A BINARIO
let binario=(decimal)=>{
    console.log(decimal.toString(2));
}
// binario(2);


// let bit=(num)=>{
//     let binario[];
//     while(a>0){
//         if(a%2==0){
//             binario.push("0");
//             a=a/2;
//         }
//     }
//     binario.reverse();
    
// }

let mayorDeEdad=(edad)=>{
    if(edad<18){
        return "No es mayor";
    }else{
        return "Es mayor";
    }
}

/////OPERACIONES TERNARIAS (TRES ELEMENTOS)
// let mayor=edad=>{
//     const res=edad<18?">Es menor de edad":"Es mayor de edad";
//     return res;
// }

let mayor=edad=> edad<18?"Es menor de edad":(edad<100?"Sigues vivo":"¿Estas vivo?");

let resultato= mayorDeEdad(21);
//console.log(resultato);
// console.log(mayor(176));


/*CALLBACKS*/
// callback no es palabra reservada
let operacion=(n,callback)=>{
    return callback(n);
}
let cuadrado=(numero)=>{
    return numero*numero;
}
let doble=numero=> numero+numero;
let triple=numero=> numero*3;

let x=operacion(5,cuadrado);
// console.log(x);
// x=operacion(5,doble);
// console.log(x);
// console.log(operacion(5,triple));

setTimeout(()=>{
    console.log("3")
},3000);