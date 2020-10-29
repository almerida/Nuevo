var peso;
var pesoEnMarte; //CamelCase

alert("¿Quieres saber tu peso en marte?");
peso = prompt("¿Cual es tu peso en kg?", "70");
peso= parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;
 
alert("Tu peso en Marte es: " + pesoEnMarte + " kg. ");


// alert ("Hola mundo");
//var nombre = "Freddy";
//var apellido ="Vega";
//var edad = 28;

//alert(nombre + " " + apellido +" \n " + edad + " " + "años");

//alert("2" + 5 * 8);//