class Maestro{
    constructor(calificaciones){
        this.calificaciones=calificaciones;
    }
    calculaPromedio(){
        var i=this.calificaciones.length;
        var suma=0;

        this.calificaciones.forEach(element => {
            suma+=element;
        });
        return suma/i;
    }
}
class MaestroDeFisica extends Maestro{
    constructor(calificaciones, antiguedad){
        super(calificaciones);
        this.antiguedad=`${antiguedad} años de antiguedad`;
        this.materia="Fisica";
    }
}
class MestroDeMusica extends Maestro{
    constructor(calificaciones,edad){
        super(calificaciones);
        this.edad=edad;
        this.materia="Musica";
    }
}
var maestroMate= new Maestro([10,8,9]);
var maestroFisica= new MaestroDeFisica([10,8,9],4);
var maestroMusica= new MestroDeMusica([10,8,9],24);
console.log(maestroMate);
console.log(maestroFisica);
console.log(maestroMusica);


