// Tipos de datos en Java Script

// Perzonalización de salidas a consola
//const bg= "linear-gradient(45deg, rgba(52,152,219,1) 0%, rgba(26, 188, 156, 1) 50%)";
//const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`

console.log("%c1.- Ejercicio 02: Tipos de Datos ", style_console);

// 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.warn("1.- UNDFINED (No definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado: ${usuarioLogeado}`);
console.log(`rolUsuario: ${rolUsuario}`);
console.log(`ultimoAcceso: ${ultimoAcceso}`);

/* En java Script existe el metodo typeof() que nos devuelve el tipo de dato de una variable preficamente declarada */


console.log("Tipos de dato de las variabes declaradas");
console.log(`usuarioLogeado: ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario: ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso: ${typeof(ultimoAcceso)}`);

// Supongamos que un usuario denominado MarcoRamirez99 se ha logueado exitosamente, el valor de la variable debera actualizarse a su username

usuarioLogeado = "YazminEsquivel08";

// Pero no solo cambiará su valor, también cambiará su tipo

console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado} y su nuevo tipo de datos es: ${typeof(usuarioLogeado)}`);


// 2. BOOLEAN (TRUE/FALSE) - Verdadero o Falso
console.warn("2.- BOOLEAN (TRUE/FALSE)");
var hayUsuarioLogeado = false;

/* Supongamos que nuestra app tendrá un menú específico para los usuarios registrados, en el podrán visualizar sus mensajes o estado de sus publicaciones de renta o venta de propiedades, a diferencia de un usuario que estra de manera incognita a visualizar las propiedades.*/

function validarUsuarioLogeado() {
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que 
    es de tipo ${typeof (hayUsuarioLogeado)}`);

    if (hayUsuarioLogeado===true) 
    {
        console.log("Dado que se ha logeado un usuario la app mostrará el menu del usuario");
    } 
    else if (!hayUsuarioLogeado) 
    {
        console.log("Dado que no hay usuario logeado, la app mostrará el menú de usuario.");
    }
    else {
        console.log("No puedo procesar este tipo de dato, requerido de un booleano");
    }
}

// test1: usuario logueado = true
hayUsuarioLogeado = true;
console.log("Test 1")
validarUsuarioLogeado();

// test2: usuario logueado = false
hayUsuarioLogeado = false;
console.log("Test 2")
validarUsuarioLogeado();

// 3. test3: usuario logueado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogeado = 52.5;
validarUsuarioLogeado();

// 3. NUMBER (Numéricos)
console.warn("3.- NUMBER (NUMÉRICOS)");
/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros lenguajes de programación lo que un
ENTERO (INT), DLOTANTE (FLOAT), DECIMAL, DOBLE (DOUBLE), para el solo solo son NUMBER */

let userID_Owner = 225
let princeProperty = 125000.50
let latGPS = 20.240508
let longGPS = -97.952881
let altdGPS = 1180 // en metros sobre el nivel del mar

console.log(`Los valores de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario propietario: ${userID_Owner}
    Precio de la propiedad: $${princeProperty} USD
    Latitud (GPS): ${latGPS}
    Longitud (GPS): ${longGPS}
    Altitud (GPS): ${altdGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario propietario: ${typeof(userID_Owner)}
    Precio de la propiedad: ${typeof(princeProperty)} 
    Latitud (GPS): ${typeof(latGPS)}
    Longitud (GPS): ${typeof(longGPS)}
    Altitud (GPS): ${typeof(altdGPS)}`);


