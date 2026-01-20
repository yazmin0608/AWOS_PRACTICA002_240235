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
        isSaleable:true,
        includeServices:["Agua","Luz","Gas"],
        lat:19.4283813,
        long:-99.1020177,
        status:"Good",
        token:Symbol("D-12558-CDMX-MX-S"),
        ownerID:32412
    };
     //Impresion del objeto en formato tabla
     console.table(property1)

     // 3. Leyendo laspropiedades de un objeto
     /* Un objeto es un conjunto de variables que abstraen una entidad física o conceptual de la
     que es significativo almacenar información para el programa o sistema que estemos 
     desarrollado.

     Para acceder a las propiedades individuales basta con poner el nombre del objeto un "." y el 
     nombre de la propiedad*/

     console.warn("3. Lectura de Propiedades de un Objeto");

    console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name}
    cual se ddescribe como: ${property1.description} con un costo de: ${property1.price}
    con los servicio incluidos de: ${property1.includedServices}${property1.isSeleable ? ", actualmente esta a la venta" :
    "que por el momento no esta a la venta"}`);

    // 4. Modificación de los valores de las propiedades de un objeto
    /*Para modificar los datos de una variable basta con acceder a la propieddad deseada a
    modificar y asignarle su nuevo a tráves del signo =*/

    console.warn("4. Modificación de las propiedades de un objeto");
    property1.price = 8200.00;
    property1.isSeleable = true;
    property1.includedServices = ["agua", "luz", "gas", "internet", "seguridad privada"];


    console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name} el
    cual se describe como: ${property1.description} por un precio de: ${property1.price} con los 
    servicio incluidos de: ${property1.includedServices} ${property1.isSeleable ? ", actualmente esta a la venta" :
    "que por el momento no esta a la venta"}`);


    // Destructuración de Objetos (OBJECT DESTRUCTURING)
    /*JavaScript es un lenguaje dinámico que permite que un objeto previamente definido pueda ser
    descompuesto en pequeñas nuevas partes (variables) para que estas puedan ser manipuladas segun
    sea la necessidad*/

    user1 =
    {
        userID: 32412,
        name: "John Doe",
        email: "John.doe@gamail.com",
        createdAt: new Date("2015/01/30 23:15:52"),
        lastLogin: new Date("2026/01/20 08:00:05"),
        userRole: ("Vandedor"),
        totalProperties: 12,
        rating: 9.4,
    }

     user2 =
    {
        userID: 48571,
        name: "Yazmin Esquivel",
        email: "yazmin@gamail.com",
        createdAt: new Date("2024/08/20 15:08:58"),
        lastLogin: new Date("2026/01/19 23:15:35"),
        userRole: ("Comprador"),
        rating: 8.5,
        lastOperation: "Buscando Departamento para renta"
    }

    user3 =
    {
        userID: 4947,
        name: "Andrea Acosta",
        email: "andrea@gamail.com",
        createdAt: new Date("2025/09/21 15:08:50"),
        lastLogin: new Date("2026/02/18 20:00:40"),
        userRole: ("Comprador"),
        rating: 8.5,
        lastOperation: "Buscando Departamento para renta"
    }

     user4 =
    {
        userID: 4846,
        name: "Obed Vargas",
        email: "obed@gamail.com",
        createdAt: new Date("2023/09/18 13:00:30"),
        lastLogin: new Date("2026/02/18 19:00:00"),
        userRole: ("Comprador"),
        rating: 8.5,
        lastOperation: "Buscando Departamento para renta"
    }

    console.warn("5. Desestructuración de Objetos")

    const buyerBid = (seller, buyer, property, price_bidded) => {

        const {userID: sellerID, email: sellerEmail} = seller;
        const {userID: buyerID, email: buyerEmail} = buyer;
        const {price,id} = property;

        const fecha_oferta = new Date();


        console.log(`El usuario: ${buyerID} esta realizando un oferta al usuario: ${sellerID}
            por la cantidad de: ${price} por la propiedad ${id} confecha: ${new Date}`);

        return {
            buyerID,
            sellerID,
            propertyID: id,
            propertyPrice: price,
            date_bidded: fecha_oferta,
            bid_accurrate: Math.round((price_bidded/ price) * 100 *100) / 100 +"%",

        }
    }

    // Test 1: Ell usuario 2 realiza una oferta de 7500
    let bid1 = buyerBid(user1, user2, property1,7500);
    console.log(`La oferta tiene una exactitud del: ${bid1.bid_accurrate}`)

    // Test 2: Ell usuario 3 realiza una oferta de 8200
    let bid2 = buyerBid(user1, user3, property1,8200);
    console.log(`La oferta tiene una exactitud del: ${bid2.bid_accurrate}`)

    // Test 3: Ell usuario 4 realiza una oferta de 10000
    let bid3 = buyerBid(user1, user4, property1,10000);
    console.log(`La oferta tiene una exactitud del: ${bid3.bid_accurrate}`)
