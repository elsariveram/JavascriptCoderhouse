

//Ideas
            //podria ser un array, con objetos del rosario dentro

            //podria ser un array con datos de conteo, que luego son utilizados por la funcion rezar


            //1   2  3  4  5  6  7  8  9  10

            //boton adelante +1   boton atras -1  el boton define el valor del contador en la variable contador

            //1er misterio= 10 u
            //2do misterio= 20 u total
            //3er misterio=30 u total
            //4to misterio = 40 u total
            //5to misterio = 50 u total

            //cada tipo de misterio tiene su total de 50, y cada uno deberia tener un identificador

            //deberia haber las siguientes variables: contador de unidades en total
            //un condicional para definir el contador como 1er o segundo misterio
            //funcion lectura rozario, cuando se cumpla cierta condicion se vuelve a repetir
            //funcion lectura padre nuestro (funciona )

            // boton
            // let numeroMisterio_=1;
            // let contadorUnidadesAvesMisterio=1;
            // let contadorUnidadesAvesGlobal=1;

            let numeroMisterio = 1;
            let contadorUnidadesAvesMisterio = 1;
            let contadorUnidadesAvesGlobal = 1;
            
            function leerAve() {
                let mensaje = `${numeroMisterio}° misterio:\n${contadorUnidadesAvesMisterio} cuenta:\n"Dios te salve, Maria, llena eres de GRACIA, el SEÑOR es contigo, BENDITA eres entre todas las mujeres y BENDITO es el fruto de tu vientre, Jesús".\nSanta Maria, MADRE de Dios, RUEGA por nosotros pecadores, AHORA y en la hora de nuestra MUERTE, \namén".\nAceptar= siguiente     Cancelar= atrás`;
                return confirm(mensaje);
            }
            
            function actualizarContadores(avanzar) {
                if (avanzar) {
                    contadorUnidadesAvesMisterio++;
                    contadorUnidadesAvesGlobal++;

                    if (contadorUnidadesAvesGlobal % 10 === 1 && contadorUnidadesAvesGlobal > 1) {
                        numeroMisterio++;
                        contadorUnidadesAvesMisterio = 1;
                    }
                } else {
                    if (contadorUnidadesAvesGlobal > 1) {
                        contadorUnidadesAvesGlobal--;
                        contadorUnidadesAvesMisterio--;
                        if (contadorUnidadesAvesMisterio < 1) {
                            if (numeroMisterio > 1) {
                                numeroMisterio--;
                                contadorUnidadesAvesMisterio = 10; // Si retrocede al misterio anterior, la cuenta debe ser la última del misterio anterior.
                            }
                        }
                    } 
                }
            }
            
            do {
                let avanzar = leerAve();
                if (!avanzar && contadorUnidadesAvesGlobal === 1) {
                    alert("Operacion cancelada.")
                    break; // Salir  si el usuario selecciona Cancelar en el primer confirm.
                }
                actualizarContadores(avanzar);
            } while (contadorUnidadesAvesGlobal >= 1 && contadorUnidadesAvesGlobal <= 50);
            
