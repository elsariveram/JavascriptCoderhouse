//pseudocodigo

alert(`¡Bienvenido al rosario online!\n\nEn este sagrado encuentro de oración, unirás tus manos y corazón con María, la bienaventurada Madre de Dios. Elevando tus peticiones y alabanzas ante el trono de gracia y amor. \n\n El Rosario es una dulce melodía de virtud y devoción, tejida con flores de pureza caridad. `);

const ListaUsuarios = [];

const HistorialUsuarioActual =[0]


    function SolicitarDatosUsuario() {

        let VarNombre;
        let VarPeticion;

        while (true) {
            VarNombre = prompt("Ingresa tu nombre");

            if (VarNombre === null || VarNombre.trim() === "") {
                if (VarNombre === null) {
                    return null;
                }
                continue;
            }

            break;
        }
            
                VarPeticion = prompt("Ingresa tus peticiones de intercesión o agradecimientos");

                if (VarPeticion === null ) {
                    
                        VarPeticion="";
                        
                    }


        let Usuario = { nombre: VarNombre, peticion: VarPeticion, historial: 0 };

            ListaUsuarios.push(Usuario);
            return Usuario;
    }
//Info Usuario e Historial

        //HISTORIAL GENERAL: en UsuarioACtual
        //MISTERIOS REZADOS > TIPO Y NUMERO DE MISTERIO
        //AVES HECHOS POR MISTERIO
let usuarioActual = SolicitarDatosUsuario();
        //sigue mas abajo


if (usuarioActual === null) {
    console.log("Operación cancelada por el usuario.");}
// mostrar usuario
else{

    function MostrarUsuario(Usuario) {
        return "Hola " + Usuario.nombre + ", en el siguiente rosario Junto a la Madre de Dios, estarán intercediendo por las siguientes peticiones: " + Usuario.peticion;
     }
     
     console.log(MostrarUsuario(usuarioActual));
     
     console.table(usuarioActual);
     
     alert(MostrarUsuario(usuarioActual));
     

     //Pedir dia
     let dia;

    function PedirDia() {
        let diaValido = false;
        while (!diaValido) {
            dia = prompt("Introduce el nombre del día de hoy (ejemplo: lunes)");
            if (dia === null) {
                alert("Operación cancelada por el usuario");
                console.log("Operación cancelada por el usuario");
                return; 
            }
            // Convertir el día a minúsculas y quitar espacios
            dia = dia.toLowerCase();
            dia = dia.trim();
            // Verificar si el día ingresado es válido
            switch (dia) {
                case 'lunes':
                case 'sábado':
                case 'sabado':
                case 'martes':
                case 'viernes':
                case 'miércoles':
                case 'miercoles':
                case 'domingo':
                case 'jueves':
                    diaValido = true;
                    break;
                default:
                    alert("El día ingresado no es válido. Por favor, intenta nuevamente.");
                    break;
            }
        }
    }
    
    
     PedirDia();

                            
     let misterio;

     if (dia===null){
        alert("Operacion cancelada por el usuario")
        console.log ("Operacion cancelada por el usuario");
     }
     //definir dia misterio
     
        else{
            function DefinirMisterio() {
                switch (dia) {
                    case 'lunes':
                    case 'sábado':
                    case 'sabado':
                        alert(usuarioActual.nombre + " hoy corresponden los misterios Gozosos 😍");
                        misterio="gozosos";
                        break;
                    case 'martes':
                    case 'viernes':
                        alert(usuarioActual.nombre + " hoy corresponden los misterios Dolorosos 😢");
                        misterio="dolorosos";
                        break;
                    case 'miercoles':
                    case 'domingo':
                        alert(usuarioActual.nombre + " hoy corresponden los misterios Gloriosos 😇");
                        misterio="gloriosos";
                        break;
                    case 'jueves':
                        alert(usuarioActual.nombre + " hoy corresponden los misterios Luminosos 🤩");
                        misterio="luminosos";
                        break;
                    default:
                        alert("No se reconoce el día ingresado.");
                        misterio="indefinido";
                        break;
                        
                        
                }
            }
            
         DefinirMisterio();  

        }
    
        ////////////////////////////




//conteo aves.
let conteoAves=0;
function diezAves (numeroMisterio) {
    for (let i=0;i<10;i++){
        conteoAves++;
        let continuar= confirm(numeroMisterio+" misterio"+`
                              `+conteoAves+` Cuenta: `+`
        Dios te salve Maria, llena eres de gracia, el Señor es contigo. Bendita eres entre todas las mujeres, y bendito es el fruto de tu vientre Jesús. `+`
        Santa Maria, madre de Dios, ruega por nosotros pecadores, ahora, y en la hora de nuestra muerte, amén.
        
        Peticiones: `+usuarioActual.peticion);
        if (!continuar) {
            alert("Has decidido no continuar con el rosario.");
            conteoAves = 0; // Resetea el conteo de aves
            return false; // Sale de la función diezAves
        }
         
    }
    conteoAves=0;
    return true; 
}

//Padre nuestro
 
function PadreNuestro(numeroMisterio) {
   alert(numeroMisterio + " misterio\n\n" +
        "Padre nuestro:\n" +
        "Padre nuestro que estás en los cielos,\n" +
        "Santificado sea tu Nombre,\n" +
        "Venga tu reino,\n" +
        "Hágase tu voluntad\n" +
        "En la tierra como en el cielo.\n" +
        "Danos hoy el pan nuestro de cada día.\n" +
        "Perdona nuestras ofensas,\n" +
        "Como también nosotros perdonamos a los que nos ofenden.\n" +
        "No nos dejes caer en la tentación,\n" +
        "Y líbranos del mal.\n\nAmen."
    );
}

//Gloria
function Gloria (numeroMisterio){
    alert(numeroMisterio+" misterio"+`
    `+`Gloria al Padre, Gloria al Hijo, Gloria al Espiritu Santo.
    Como era en el principio, ahora y siempre, por los siglos de los siglos. Amen.`)
}

//lectura misterios
let NumeroMisterio = 0;

function lecturaMisterios (){

    switch (misterio) {


        case "gozosos": 
             NumeroMisterio=1; // 1 es 1er misterio, 2 es 2do misterio, 3 es 3er misterio, 4 es 4to misterio, 5 es 5to misterio
            switch (NumeroMisterio) {
                case 1 : alert("1. Primer Misterio gozoso 😍: La Anunciación del Arcangel Gabriel a la Virgen María. ")
                        PadreNuestro(NumeroMisterio);
                        let continuarRezando = diezAves(NumeroMisterio); 
                          if (!continuarRezando) {
                                                  break;  
                                                  }
                        Gloria(NumeroMisterio);
                case 2 : alert("2. Segundo Misterio gozoso 😍:La Visitación de María a su prima Isabel")
                        NumeroMisterio = 2;
                       PadreNuestro(NumeroMisterio);
                       continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                         Gloria(NumeroMisterio);
                case 3 : alert("3. Tercer Misterio gozoso 😍: El Nacimiento de Jesús en Belén")
                       NumeroMisterio = 3;
                        PadreNuestro(NumeroMisterio);
                        continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                        Gloria(NumeroMisterio);
                        
                case 4 : alert("4. Cuarto Misterio gozoso 😍: La Presentación de Jesús en el Templo")
                        NumeroMisterio = 4;
                        PadreNuestro(NumeroMisterio);
                        continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                         Gloria(NumeroMisterio);
                        
                case 5 : alert("5. Quinto Misterio gozoso 😍: Hallazgo del Niño Jesús en el Templo")
                         NumeroMisterio = 5;
                        PadreNuestro(NumeroMisterio);
                        continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                          Gloria(NumeroMisterio);
                          
            }
            break;


        case "dolorosos" : 
        NumeroMisterio=1; // 1 es 1er misterio, 2 es 2do misterio, 3 es 3er misterio, 4 es 4to misterio, 5 es 5to misterio
        switch (NumeroMisterio) {
            case 1 : alert("1. Primer Misterio doloroso 😢: La Oración de Jesús en el Huerto. ")
                    PadreNuestro(NumeroMisterio);
                    let continuarRezando = diezAves(NumeroMisterio); 
                      if (!continuarRezando) {
                                              break;  
                                              }
                    Gloria(NumeroMisterio);
            case 2 : alert("2. Segundo Misterio doloroso 😢:La Flagelación de Jesús.")
                    NumeroMisterio = 2;
                   PadreNuestro(NumeroMisterio);
                   continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                     Gloria(NumeroMisterio);
            case 3 : alert("3. Tercer Misterio doloroso 😢: La Coronación de Espinas.")
                   NumeroMisterio = 3;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                    Gloria(NumeroMisterio);
                    
            case 4 : alert("4. Cuarto Misterio doloroso 😢: Jesús con la Cruz a cuestas.")
                    NumeroMisterio = 4;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                    if (!continuarRezando) {
                                            break;  
                                            }
                     Gloria(NumeroMisterio);
                    
            case 5 : alert("5. Quinto Misterio doloroso 😢: La Crucifixión de Jesús.")
                     NumeroMisterio = 5;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                      Gloria(NumeroMisterio);
                      
        }
        break;
        case "gloriosos" : 
        NumeroMisterio=1; // 1 es 1er misterio, 2 es 2do misterio, 3 es 3er misterio, 4 es 4to misterio, 5 es 5to misterio
        switch (NumeroMisterio) {
            case 1 : alert("1. Primer Misterio Glorioso 😇: La Resurrección de Jesús. ")
                    PadreNuestro(NumeroMisterio);
                    let continuarRezando = diezAves(NumeroMisterio); 
                      if (!continuarRezando) {
                                              break;  
                                              }
                    Gloria(NumeroMisterio);
            case 2 : alert("2. Segundo Misterio Glorioso 😇:La Ascensión de Jesús al cielo.")
                    NumeroMisterio = 2;
                   PadreNuestro(NumeroMisterio);
                   continuarRezando = diezAves(NumeroMisterio); 
                   if (!continuarRezando) {
                                           break;  
                                           }
                     Gloria(NumeroMisterio);
            case 3 : alert("3. Tercer Misterio Glorioso 😇: La Venida del Espíritu Santo.")
                   NumeroMisterio = 3;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                    Gloria(NumeroMisterio);
                    
            case 4 : alert("4. Cuarto Misterio Glorioso 😇: La Asunción de María al cielo.")
                    NumeroMisterio = 4;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                    if (!continuarRezando) {
                                            break;  
                                            }
                     Gloria(NumeroMisterio);
                    
            case 5 : alert("5. Quinto Misterio Glorioso 😇: La Coronación de María como Reina del cielo y la tierra.")
                     NumeroMisterio = 5;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                      Gloria(NumeroMisterio);
                      
        }
        break;
        case "luminosos" : 
        NumeroMisterio=1; // 1 es 1er misterio, 2 es 2do misterio, 3 es 3er misterio, 4 es 4to misterio, 5 es 5to misterio
        switch (NumeroMisterio) {
            case 1 : alert("1. Primer Misterio Luminoso 🤩: El Bautismo de Jesús en el Jordán. ")
                    PadreNuestro(NumeroMisterio);
                    let continuarRezando = diezAves(NumeroMisterio); 
                      if (!continuarRezando) {
                                              break;  
                                              }
                    Gloria(NumeroMisterio);
            case 2 : alert("2. Segundo Misterio Luminoso 🤩:La auto-revelación de Jesús en las bodas de Caná.")
                    NumeroMisterio = 2;
                   PadreNuestro(NumeroMisterio);
                   continuarRezando = diezAves(NumeroMisterio); 
                   if (!continuarRezando) {
                                           break;  
                                           }
                     Gloria(NumeroMisterio);
            case 3 : alert("3. Tercer Misterio Luminoso 🤩: El anuncio del Reino de Dios invitando a la conversión.")
                   NumeroMisterio = 3;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                    Gloria(NumeroMisterio);
                    
            case 4 : alert("4. Cuarto Misterio Luminoso 🤩: La Transfiguración de Jesús en el monte Tabor.")
                    NumeroMisterio = 4;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                     Gloria(NumeroMisterio);
                    
            case 5 : alert("5. Quinto Misterio Luminoso 🤩: La institución de la Eucaristía en la Última Cena.")
                     NumeroMisterio = 5;
                    PadreNuestro(NumeroMisterio);
                    continuarRezando = diezAves(NumeroMisterio); 
                       if (!continuarRezando) {
                                               break;  
                                               }
                      Gloria(NumeroMisterio);
                      
        }
        break;
    
    }

}

lecturaMisterios();


        //HISTORIAL GENERAL: en UsuarioACtual
        //MISTERIOS REZADOS > TIPO Y NUMERO DE MISTERIO
        //AVES HECHOS POR MISTERIO
        let datosHistorial = "Misterios "+misterio+": "+NumeroMisterio+" misterios rezados.";
       
        
      
        
        // Suponiendo que usuarioActual es el usuario al que deseas agregar datos al historial
       
        usuarioActual.historial=datosHistorial;
        
        // Muestra la tabla con los datos del usuarioActual
        console.table(usuarioActual);

        alert(`¡Felicidades ${usuarioActual.nombre}! \n Con la ayuda e intercesión maternal de María, has intercedido por: ${usuarioActual.peticion}\nRezando: ${usuarioActual.historial} \nQue tus manos, unidas en oración a María, sigan esparciendo flores de bondad y coronas de amor. Y que ella siga intercediendo por ti y tus intenciones, guiándote con su ternura maternal. `)

}///// final de mostrar usuario




