
let opcion = Number(prompt("Quieres salir de vacaciones: 1)SI 2)NO"));


do {
    if(opcion===1){
        console.log(`
            1) CDMX
            2) Monterrey
            3) Guadalajara
            4) Puerto Rico
            5) EUA
            6) Canada`)

        const destino  = Number(prompt("Cual es tu destino: "));

        Descuento1 = "A123";//10%
        Descuento2= "B123";//25%
        Descuento3 = "C123";//30%
        porcentaje = 0;
        resultado = 0;

  
        switch(destino) {
            
            case 1:
                console.log("El costo del viaje es de $ 1000")
               descuento=Number(prompt("Cuenta con algun codigo de descuento 1)SI 2)NO"));

               if(descuento===1){
                const codigo = prompt("Ingresa el codigo de descuento");

                if(codigo===Descuento1){
                    porcentaje=1000*0.10;
                    resultado = 1000-porcentaje;
                    console.log("Precio con el descuento aplicado: $"+ resultado);
                }
                else if(codigo===Descuento2){
                    porcentaje=1000*0.25;
                    resultado = 1000-porcentaje;
                    console.log("Precio con el descuento aplicado: $"+ resultado);
                }
                else if(codigo===Descuento3){
                    porcentaje=1000*0.30;
                    resultado = 1000-porcentaje;
                    console.log("Precio con el descuento aplicado: $"+ resultado);
                }  
            }break;

            case 2:
                console.log("El costo del viaje es de $ 1500")
               descuento=Number(prompt("Cuenta con algun codigo de descuento 1)SI 2)NO"));

               if(descuento===1){
                const codigo = prompt("Ingresa el codigo de descuento");

                    if(codigo===Descuento1){
                        porcentaje=1500*0.10;
                        resultado = 1500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento2){
                        porcentaje=1500*0.25;
                        resultado = 1500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento3){
                        porcentaje=1500*0.30;
                        resultado = 1500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
               }break;

            case 3:
                console.log("El costo del viaje es de $ 2000")
               descuento=Number(prompt("Cuenta con algun codigo de descuento 1)SI 2)NO"));

               if(descuento===1){
                const codigo = prompt("Ingresa el codigo de descuento");

                    if(codigo===Descuento1){
                        porcentaje=2000*0.10;
                        resultado = 1500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento2){
                        porcentaje=2000*0.25;
                        resultado = 2000-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento3){
                        porcentaje=2000*0.30;
                        resultado = 1500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
               }break;

            case 4:
                console.log("El costo del viaje es de $ 2500")
               descuento=Number(prompt("Cuenta con algun codigo de descuento 1)SI 2)NO"));
             
               if(descuento===1){
                const codigo = prompt("Ingresa el codigo de descuento");

                    if(codigo===Descuento1){
                        porcentaje=2500*0.10;
                        resultado = 2500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento2){
                        porcentaje=2500*0.25;
                        resultado = 2500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento3){
                        porcentaje=2500*0.30;
                        resultado = 2500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
               }break;

            case 5:
                console.log("El costo del viaje es de $ 3000")
               descuento=Number(prompt("Cuenta con algun codigo de descuento 1)SI 2)NO"));        

               if(descuento===1){
                const codigo = prompt("Ingresa el codigo de descuento");

                    if(codigo===Descuento1){
                        porcentaje=3000*0.10;
                        resultado = 3000-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento2){
                        porcentaje=3000*0.25;
                        resultado = 3000-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento3){
                        porcentaje=3000*0.30;
                        resultado = 3000-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
               }break;

            case 6:
                console.log("El costo del viaje es de $ 3500")
               descuento=Number(prompt("Cuenta con algun codigo de descuento 1)SI 2)NO"));
             
               if(descuento===1){
                const codigo = prompt("Ingresa el codigo de descuento");

                    if(codigo===Descuento1){
                        porcentaje=3500*0.10;
                        resultado = 3500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento2){
                        porcentaje=3500*0.25;
                        resultado = 3500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
                    else if(codigo===Descuento3){
                        porcentaje=3500*0.30;
                        resultado = 3500-porcentaje;
                        console.log("Precio con el descuento aplicado: $"+ resultado);
                    }
               }break; 

            default:
                console.log("Lo sentimos no hay viajes por el momento")
        }
        opcion = Number(prompt("Quieres salir de vacaciones: 1)SI 2)NO"));
    }

    else if (opcion===2){
    console.log("Gracias por su preferenciaaaa");
    }
    

} while(opcion ===1)

console.log("Lo sentimos. No se valido su respuesta");
    