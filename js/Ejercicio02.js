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


// 4.- STRING (CADENAS DE CARACTERES)
var fullnameOwner = "Yazmin Ariana Esquivel Marquez"
let nameProperty = "   Hermosa casa en la Playa de Puerto Vallarta   ";
let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automóviles a orilla del mar.";
var statusProperty = "Disponible";
const typeProperty = "C";
var addressProperty;

/* Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra 
aplicación, que no tienen un tamaño máximo y que están conformadas por carácteres alfabéticos, 
caracteres especiales como acentos o símbolos de algún idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES, PALABRAS)");
console.log(`El usuario: ${fullnameOwner}, 
    Esta vendiendo o rentando: ${nameProperty} 
    Que consiste en: ${descriptionProperty}
    Actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`)

console.log(`Las variables declaradas son del tipo:
        fullnameOwner :   ${typeof(fullnameOwner)}
        nameProperty :   ${typeof(nameProperty)}
        descriptionProperty:  ${typeof(descriptionProperty)}
        statusProperty :   ${typeof(statusProperty)}
        typeProperty :   ${typeof(typeProperty)}`);

// Manipulando Strings, los tipos de datos cualitativos tienen ciertos métodos para manipular su valor
// por mencionar algunos:

// Transformar a MAYÚSCULAS
console.log(`Nombre del Propietario: ${fullnameOwner.toUpperCase()}`);
// Transformar a minúsculas
console.log(`Descripción de la Propiedad: ${descriptionProperty.toLocaleLowerCase()}`);
// Número de Caracteres
console.log(`Numero de letras en el tipo de Propiedad ${typeProperty.length}`);
//subcadena 
console.log(`Nombre del propietario: ${fullnameOwner.slice(14, fullnameOwner.length)}`);
//Eliminar espacios en blanco 
console.log(`Nombre de la propiedad: ${nameProperty.trim()}`);
//Remplazar caracteres 
console.log(`Descripción modificada: ${descriptionProperty.replace("Mar", "Rio")}`);
//Remplazar todos los caracteres 
console.log(`Descripcion modificada: ${descriptionProperty.toLocaleUpperCase().replaceAll("A", "4")}`);

// 5. BIGINT (Entero de grandes dimensiones)
/*Este tipo de dato permite almacenar numeros exajeradamente amplios que usualmente aplicaciones
cientificas avanzadas requieren, esto para no perder presición en los valores almacenados*/

const numeroGrande = 1234567890;
let numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 123456789012345678901234567890;
let numeroGrande4 = 1234567890123456789012345678901234567890;

console.warn("5. BIGINT (enteros de grandes dimensiones)");

console.log(`El valor del numeroGrande es: ${numeroGrande} y es soportado por : ${typeof(numeroGrande)}`);

console.log(`El valor del numeroGrande2 es: ${numeroGrande2} a psear de ser soportado 
por : ${typeof(numeroGrande2)} comienza a tener problemas de presicion`);


//BigInt no pierde presición
console.log(`El valor del numeroGrande3 es: ${numeroGrande3} ya no es soportado por 
NUMBER y adquiere un nuev tipo siendo: ${typeof(numeroGrande3)}`);

console.log(`El valor del numeroGrande4 es: ${numeroGrande4} y es soportado por : ${typeof(numeroGrande4)}`);

numeroGrande2 = BigInt("12345678901234567890");
console.log(`Si declaramos la variable con el valor de numeroGrande2 es: ${numeroGrande2} un tipo de dato: ${typeof(numeroGrande2)}`);

numeroGrande3 = BigInt("123456789012345678901234567890");
console.log(`Si declaramos la variable con el valor de numeroGrande3 es: ${numeroGrande3} un tipo de dato: ${typeof(numeroGrande3)}`);

numeroGrande4 = BigInt("1234567890123456789012345678901234567890");
console.log(`Si declaramos la variable con el valor de numeroGrande4 es: ${numeroGrande4} un tipo de dato: ${typeof(numeroGrande4)}`);

//6. Symbol (simbolo)

/*Es un tipo de dato que ademas de tener un tipo, un valor, asocia la ubicación en el espacio en memoria,
por lo que todos los valores asignados asignados a este tipo siempre seran unicos.
*/

console.warn("6. SYMBOL (simbolo)");

const numero1 = 4;
const numero2= 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

//valores y tipo de datos
console.log(`Valores y tipos:
    numero1 - valor: ${numero1}, tipo: ${typeof(numero1)}
    numero2 - valor: ${numero2}, tipo: ${typeof(numero2)}
    numero3 - valor: ${numero3}, tipo: ${typeof(numero3)}
    numero4 - valor: ${numero4}, tipo: ${typeof(numero4)}
    numero5 - valor: ${numero5.description}, tipo: ${typeof(numero5)}
    numero6 - valor: ${numero6.description}, tipo: ${typeof(numero6)}
    numero7 - valor: ${numero7.description}, tipo: ${typeof(numero7)}
    numero8 - valor: ${numero8.description}, tipo: ${typeof(numero8)}
    `);

// Pruebas comparativas
 if(numero1 ==numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else

    console.log("Las variables numero1 y numero2 no son iguales en valor.")
if(numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")

if(numero1 == numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")

if(numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")

if(numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")

if(numero1 ==numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero2 no son iguales en valor.")

if(numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")

if(numero1 == numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")

if(numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")

if(numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")

//7. NULL (Nulo)
/* El tipode dato nulo es similar a UNDFINED, con la variación de que hay un consentimiento del usuario
o del sistema a que esta variable intencionalmente fue iniciada con este valor*/

var isPremiemUser;
var isNewUser;
let todayDate = new Date();
var lastLogin = todayDate;

console.warn("7. NULL (Nulo)");
console.log(`
    El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiemUser}, tipo de dato: ${typeof(isPremiemUser)}`);

// Validación del usuario

if(todayDate == lastLogin)
    isNewUser = true;
else
    isNewUser = false;

// Cómo es un usuario nuevo aun no ve, ni publica ninguna propiedad por defecto no interesa por el
// momento que sea premium hasta que interactue con la plataforma.
isPremiemUser = null;
console.log("Datos despues de la validaación de los datos del usuario: ")
console.log(`
    El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiemUser}, tipo de dato: ${typeof(isPremiemUser)}`);