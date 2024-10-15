// function suma(){
//     return 5+10;
// }

// function resta(){
//     return 5-10;
// }
// function division(){
//     return 5/10;
// }
// function multiplicacion(){
//     return 5*10;
// }


// console.log(`
//     1) Suma
//     2) Resta
//     3) Division
//     4) Multiplicacion`);

//     let opcion = Number(prompt("Que opccion desea realizar:"));
// if(opcion==1){
//     console.log(suma());
// }
// else if(opcion==2){
//     console.log(resta());
// }
// else if(opcion==3){
//     console.log(division());
// }
// else if(opcion==4){
//     console.log(multiplicacion());
// }
function suma(numero1, numero2, numero3 = 5) {
    return numero1+numero2+numero3
}

console.log(suma(10,5)) // 20
console.log(suma(4,5,10)) // 10
console.log(suma(4,5,'30')) //