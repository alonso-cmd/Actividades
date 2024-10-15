// let respuesta = true;
// const alumnos = [];
// const promedios = [];

// while(respuesta) {
//     const nombre = prompt("Nombre del alumno: ");
//     const promedio = prompt("Promedio del alumno: ");
//     alumnos.push(nombre);
//     promedios.push(promedio);
//     const p = prompt("Desea agregar un nuevo registro: 1)Si 2)No ");
//     respuesta = p == '1';
// }

// let aprobados = 0;
// let reprobados = 0;
// let sumaPromedio = 0;

// let resultado = parseFloat()

// for (let promedio of promedios) {
//     sumaPromedio = sumaPromedio + promedio;
//     //let resultado = parseFloat(sumaPromedio / alumnos.length)
//     if (promedio < 7) {
//         reprobados = reprobados + 1;
//     } else {
//         aprobados = aprobados + 1;
//     }
// }

// alert(`Total de alumnos: ${alumnos.length} 
//     de los cuales Alumnos reprobados: ${reprobados} 
//     y alumnos aprobados: ${aprobados}
//     Promedio total del grupo: ${sumaPromedio / alumnos.length}
// `);

let respuesta = true;
const alumnos = [];
const promedios = [];

while(respuesta) {
    const nombre = prompt("Nombre del alumno: ");
    const promedio = parseFloat(prompt("Promedio del alumno: "));
    alumnos.push(nombre);
    promedios.push(promedio);
    const p = prompt("Desea agregar un nuevo registro: 1)Si 2)No ");
    respuesta = p == '1';
}

let aprobados = 0;
let reprobados = 0;
let sumaPromedio = 0;

for (let promedio of promedios) {
    sumaPromedio += promedio ;
    if (promedio < 7) {
        reprobados ++ ;
    } else {
        aprobados ++;
    }
}

const promedioTotalGrupo=sumaPromedio/alumnos.length;

alert(`Total de alumnos: ${alumnos.length} 
    de los cuales Alumnos reprobados: ${reprobados} 
    y alumnos aprobados: ${aprobados}
    Promedio total del grupo: ${promedioTotalGrupo}
`);