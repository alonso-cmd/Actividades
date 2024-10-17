const calificaciones=[8,7,9,5,7,6,8,10,10,10,6];

//const promedio = calificaciones.filter((elemento) => elemento < 7);
const reprobados= calificaciones.filter((elemeto) => elemeto <7);
const aprobados= calificaciones.filter((elemento) => elemento >7);
const excelente= calificaciones.filter((elemento) => elemento === 10)

let sum = 0;
for (let calificacion of calificaciones){
    sum += calificacion;
}

const promedio = sum / calificaciones.length;

const calificacionPar = calificaciones.filter((elemento,posicion) => posicion%2 == 0 && posicion > 0);
console.log(calificacionPar);

//////////////////////////////////

const edades = [10,56,34,45,48,9,32,7,101,120];

// si la edad se encuentra en el rango de 0 a 17 -> menor de edad
// si la edad se encuentra en el rango de 18 a 25 -> adolecente
// si la edad se encuentra en el rango de 26 a 40 -> adulto
// si la edad se encuentra en el rango de 41 a 80 -> sabio
// si la edad se encuentra en el rango de 81 a 100 -> anciano
// si la edad supera los 101 -> leyenda

const resultado = edades.map((edad)=>{
    if(edad >= 0 && edad <= 17){
        return 'menor de edad'
    }else if(edad >= 18 && edad <=25){
        return 'adolecente'
    }else if(edad >= 26 && edad <=40){
        return 'adulto'
    }else if(edad >= 41 && edad <=80){
        return 'sabio'
    }else{
        return'leyenda'
    }
});

console.log(resultado);

/////////////////////////////////////


const nombres = ["Maria", "Antonio", "Jose", "Jaime", "Gabriela", "Ortencia", "Jose", "Manuel"]

// si el nombre comienza en vocal, necesito que lo conviertan a mayusculas
// si el nombre comienza en consonante, si la primera letra se encuentra entre la la a - m invertirlo
// si el nombre comienza en consonante, si la primera letra se encuentra entre la la n - z cambiar las vocales por numeros
// si el nombre tiene 4 letras, conviertelo a minusculas
// si el nombre esta repetido, cambialo por la palabra repetido