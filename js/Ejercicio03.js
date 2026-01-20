// Estilización de la barra de pruebas en el DveTools en el navegador
console.log("%c Ejercicio 03: Funciones ", style_console);

// FUNCIONES NOMBRADAS
//1. Funciones procedurales, vacias, VOID, sin el valor de retorno y sín parámatreo de entrada

function saludar()
{
    console.log("Bienvenido al Sistema de Bienes Raíces");
}

console.log("1. Funciones sin valor de retorno, sin prámetros");
saludar();

//2. Funciones procedurales sin valor de retorno, pero si recibe paámetros es dicir datos de entrada

function saludar_usuario(username, gender)
{
    if(gender=="H")
    console.log(`Bienvenido, ${username} al sistema de Bienes Raíces`)
    else if(gender=="M")
    console.log(`Bienvenida, ${username} al sistema de Bienes Raíces`)
    else
    console.log(`Bienvenid@, ${username} al sistema de Bienes Raíces`)
}

console.warn("2. Funciones sin valor de retorno, con parámetros de entrada");
saludar_usuario("Marco", "H");
console.log("--------------------------------------------------");
saludar_usuario("Patricia", "M");
console.log("--------------------------------------------------");
saludar_usuario("Guadalupe", null);
console.log("--------------------------------------------------");

//3. Funciones que retornan un dato, pero que no reciben parámetros

function fechaActual()
{
    const fecha = new Date();
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

     return fecha_formatoMX;
};

console.warn("3. Funciones que retornan un valor, pero no tienen parámetros")
let hoy = fechaActual();
console.log(`Bienvenid@ al Sistema de Bienes Raíces, hoy es: ${hoy}`);
/*Imprimiendo que tipo de dato es:*/
console.log(fechaActual);
console.log(typeof(fechaActual));

// 4. Funciones que retornan un valor y que reciiben parámetros de entrada

function login(username, password)
{
    let userValidation = false;
    if(username==="admin" && password==="12345"){
        userValidation = true;
        console.log("Bienvenido usuario admin!")
        }
    else if(username==="admin" && password!=="12345"){
        userValidation = false;
        console.log("Lo sentimos la contraseña es incorrecta.")
        }
    else if(username!="admin" && password==="12345"){
        userValidation = false;
        console.log("Lo sentimos el nombre de usuario no existe.")
        }
    else if (username!="admin" && password!=="12345"){
        userValidation = false;
        console.log("Por favor verifica el nombre de usuario y la contraseña")
        }
    return userValidation;
}

console.warn("4. Funciones que retornan un dato, pero también reciben parametros de entrada");
var loginStatus;
//Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario: admin, password: 12345")
loginStatus = login("admin", "12345");
console.log(`${loginStatus?`El usuario admin se ha logueado satisfactoriamente`:`Hubo un error en el login del usuario admin`}`);

//Test 2 - Usuario y contraseña correctos
console.log("Test 2 - usuario: administrador, password: 12345")
loginStatus = login("administrador", "12345");
console.log(`${loginStatus?`El usuario admin se ha logueado satisfactoriamente`:`Hubo un error en el login del usuario admin`}`);

//Test 3 - Usuario y contraseña correctos
console.log("Test 3 - usuario: admin, password: 1234567890")
loginStatus = login("admin", "1234567890");
console.log(`${loginStatus?`El usuario admin se ha logueado satisfactoriamente`:`Hubo un error en el login del usuario admin`}`);

//Test 4 - Usuario y contraseña correctos
console.log("Test 4 - usuario: marcor, password: mipassword")
loginStatus = login("marcor", "mipassword");
console.log(`${loginStatus?`El usuario admin se ha logueado satisfactoriamente`:`Hubo un error en el login del usuario admin`}`);

// FUNCIONES ANÓNIMAS, FUNCIONES FLECHA (ARROW, FUNCIONES LAMBADA)
/*A diferencia de las funciones nombradas este tipo de funciones no suelen ser reutilizadas en el código
solo se ejecutan una sola vez, dando velocidad, individualidad y privacidad a los datos utilizados en el proceso.*/

// 5. Función aninima sin parámetros
isNewUser = function(){
    const hoy = new Date();

    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5. Funcines Anonimas, sin parámtros")

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario": "Usuario Antiguo."}`);

console.log("----------------------------------------------------");
lastLogin = new Date("2025/12/31");
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario": "Usuario Antiguo"}`);

//6. Funciones Anónimas con parametros (Version Arrow o Lambda)

    const sumar=(a,b)=>{
        let resultado=a+b;
        return resultado;
    }

    console.warn("6. Funciones Anónimas con Parámetros")
    console.log(`El resultado de la suma de 15 + 83 es: ${sumar(15,83)}`);


    /**
     * Cuando la funcion anónima tiene  solo ianlínea de operación se puede usar 
     * una versión simplificada que no usa {} llaves, ni la palabra reservada (return)
     */

    const multiplicar=(a,b)=> a*b
    console.log(`El resultado de la multipilcacion de 15 * 125 es: ${multiplicar(15,125)}`);

    //7. Funciones Callback (Regreso de Llamado)

    console.warn("7. Funciones Anónimas Callback (Respuesta)")


    const recoverPassword= function(email,callback){
        //Generamos el código a enviar al usuario
        const recoveryCode=Math.floor(1000000+Math.random()*900000)

        console.log(`
=======================================================================
Solicitud de recuperacion recibida
Correo del Usuario solicitante: ${email}
Generando código de recuperación...
Código de seguridad generado:${recoveryCode}
Enviando el correo al usuario
Correo enviado a: ${email}, con el código de seguridad :${recoveryCode}
=======================================================================`);
    

    //Definiendo la respuesta del sistema

    const response={
        status:"OK",
        message:"Código de recuperación enviado satisfactoriamente."
    };

    callback(response);
    };

    //Invocación de una función callback 
    recoverPassword("yazmin@gmail.com", function(systemResponse){
        console.log("Respuesta del sitema")
        console.log(systemResponse.message);
    });