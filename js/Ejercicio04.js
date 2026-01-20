//Estilización de la barra zona de pruebas en el DevTools en el navegador

console.log("%cEjercicio 04: Objetos", style_console);
//Esto no es un objeto son variables independientes que no se encuentran asociadas
console.warn("1. Propiedades de un objeto")

let propertyID=1;
let propertyName="Departemanto en el Centro de México";
let propertyDescription="Hermoso departamento de 3 recamaras, 1 baño y 1 cajon de estacionamiento ubicado en el centro de la ciudad de México, ubicado en el tercer piso";
let propertyType="D"; // H: House  D: Departament  T: Terrain  L: Locale  W: Warehouse  C: Cabain
let propertyIsSaleable=false; //Se vende?
let propertyIsRentable=true; //Se renta?
let propertyPrice=7500.00
let propertyLat=19.4283813;
let propertyLong=-99.1020177;
let propertyToken=Symbol("D-12558-CDMX-MX-S");
let propertyIncludedServices=["Agua","Luz","Gas"];
let propertyImage=null
let propertyOwnerID=32412
let propertyStatus="Good"

console.log(`Datos de la propiedad en RENTA:
    Nombre:${propertyName}
    Descripción:${propertyDescription}
    Tipo:${propertyType}
    Precio:${propertyPrice}
    Ubicación:  Latidus:${propertyLat} Longitud:${propertyLong}
    Servicios incluidos:${propertyIncludedServices}
    En renta:${propertyIsRentable}
    En venta:${propertyIsSaleable}
    Token: ${propertyToken.description}
    Dueño:${propertyOwnerID}
    Imagen:${propertyImage}`)

    //2. Declaración de un objeto
    /**
     * Para declarar un objeto en JS es necesario asignarale un nombre y todas sus 
     * propiedades irán entre {} y separadas por coma en el order clave - valor
     */
    console.warn("2. Declaracion de el objeto property")
    property1={
        id:1,
        name:"Departemanto en el Centro de México",
        description:"Hermoso departamento de 3 recamaras, 1 baño y 1 cajon de estacionamiento ubicado en el centro de la ciudad de México, ubicado en el tercer piso",
        type:"D",
        price:7500.00,
        isRentable:true,
        isSaleable:false,
        includeServices:["Agua","Luz","Gas"],
        lat:19.4283813,
        long:-99.1020177,
        status:"Good",
        token:Symbol("D-12558-CDMX-MX-S"),
        ownerID:32412
    };
     //Impresion del objeto en formato tabla
     console.table(property1)
