// Comentario de una sola linea

/* Comentarios
   ...
   multilienea
   */

   const bg= "linear-gradient(45deg, rgba(52,152,219,1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`

console.log("%c1.- Ejercicio 01: Tipos de Datos ", style_console);
   //1. Utilizando la palabra reservada VAR

   // Utilizamos el método WARN para estilizar las respuestas de las pruebas realizadas a 
   // nuestro código y facilitar su revición

   console.warn("--Declaración de Variables utilizando el prefijo VAR --")

   var miNombre = "Yazmin Ariana"
   console.log("El valor almacenado en la variable miNombre es: ", miNombre);

   // Modificar el valor de la variable
   miNombre = "Ariana Esquivel"
   console.log("El nuevo valor almacenado en la variable miNombre es: ", miNombre);

   var misApellidos;
   console.log("El valor almacenado en la variables miApellido es:", misApellidos);//undefine
   // Una variable puede cambiar su valor durenate la ejecuación del programa

   console.warn("--Declaración de una Contanstante utilizando el prefijo CONST --")
   //2. Utilizando la palabra reservada CONST
   //Una constante a diferencia de una variables es que el valor no cambiará durante toda la 
   // ejecuación del programa, y al momento de ser declarada esta deberá ser inicializada obligatoriamente

   const miMatricula = "240235"
   console.log("El valor de la constante miMatricula es: ", miMatricula);

   // Intentar modificar el valor de la constante

   /*miMatricula = "240236"
   console.log("El nuevo valor de la constante miMatricula es: ", miMatricula);*/


   //3. Utilizando la palabra reservada LET
   //LET es el prefijo utilizado muy similar a VAR con la diferencia en su alcance (SCOPE),
   // aquellas declaradas con VAR tiene un alcance global en el código no importando bloques o secciones,
   // mientras que las variables declaradas con LET solo exestiran dentro del bloque o función.

   var fechaNacimiento = new Date ("2006-08-06")
   var miEdad = calcularEdad(fechaNacimiento);
   console.log("Tu edad es de: ", miEdad, " años.");  

   // Verificamos si es mayor de edad
    if (miEdad >= 18)
    {
        var esMayorDeEdad = true;
        let esMenorDeEdad = false;
    }
    if (esMayorDeEdad)
        console.log("Eres mayor de edad.")
        else
        console.log("Eres menor de edad.")

        /*console.log("El valor de esMenorDeEdad es: ", esMayorDeEdad);*/
        // La variable boolean no puede persistir por el tipo de declaración con LET, solo fue de alcanze
        //local mientras el condicional (if) se  ejecuto.
    

   function calcularEdad(fechaNacimiento)
   {
    // Para calcular la edad requerimos de la fecha del día de hoy
    var fechaHoy = new Date();

    // Dado que los datos de fecha son almacenados en milisegundos por default en JavaScript,
    // necesitamos una variables que nos permita saber  el numeri de milisegundos por día.
    let milisegundosPorDia = 24 * 60 * 60 * 1000;

    //Ya que tenemos los milisegundos por día tenemos que restar a la fecha de hoy, la fecha en 
    // que nacimos para calcular los milisegundos que hemos vivido.
    let diasVividos = (fechaHoy - fechaNacimiento)/ milisegundosPorDia;

    //Invocamos el método matemático de la función piso (FLOOR)
    diasVividos = Math.floor(diasVividos);
    let edad = diasVividos / 365.25;
    edad = Math.floor(edad);
    return edad;
   }


// Interpolación de Datos

// ${}`
misApellidos = "Esquivel Marquez";
console.log(`Hola mi nombre es ${miNombre} mis apellidos son ${misApellidos} y tengo ${miEdad} años de edad.`);

// Autor: Yazmin Ariana Esquivel Marquez.