


// window.alert("Bienvenido");
// let age=window.prompt("Que edad tienes?");
// if(age>=18){
//   window.alert("eres mayor de edad");
// }
// else{
//   window.alert("lo siento, no puedes ver el sitio");
// }

// let position=window.prompt("orden de llegada: 1er, 2do, 3ero");
// if (position=="primero"){
//   window.alert("GOLD felicidades!");}
// else if(position=="segundo"){
//   window.alert("SILVER felicidades!");}
// else if(position=="tercero"){
//     window.alert("BRONCE felicidades!");}
// else{
//   window.alert("no te entiendo");
// }

// let age=14;
// let createLogin = null;
// if (window.prompt("edad")>age){
//   createLogin = true;
// }
// else{
//   createLogin = false;
// }

if (typeof age !== "number")




/*
1
console.log imprimirà qualsevol cosa que
hi hagi entre els parèntesis a la teva consola.

Canvia la frase a imprimir de sota, desa el fitxer,
i veuràs els canvis al teu navegador.

Després de confirmar que funciona, comenta"l.
*/

console.log("este es mi primer JavaScript");

/*
2)
Fent servir tant l'operador (+) com l'operador (*),
multiplica i afegeix qualsevol combinació de números
per aconseguir imprimir el número 10.
*/

console.log("2+8=", 2+8)

/*
3)
Sovint fem servir console.log per fer `debug` (depurar errors).
Pots afegir diversos arguments a dins del parèntesi del
console.log (separant-los amb comes).
Afegeix el següent dins el console.log!

3 + 4, " should equal 7"
*/

console.log(3+4, "se consigue sumando 3 +4")

/*
4)
Afegeix dos `strings` per imprimir
el teu nom i cognom conjuntament!
*/
let nombre="sofia";
let apellido="herrera";
console.log("mi nombre es:", nombre +" "+ apellido);

/*
5)
L'operador `modulo` (%) ens retorna la resta
d'una divisió. Si dividim qualsevol número entre 2
podrem saber si és parell o senar. Prova-ho!
*/

console.log(2000%2);

/*
6)
Canvia la ubicació de Mia reassignant la variable
"currentLocation" amb un nou string!
Per fer-ho, hauràs d"afegir una nova línia de codi
(no eliminis cap de les línies de codi).
Nota: també hauràs de "descomentar" el console.log
per imprimir la localització.
*/

const name = "Mia";
let currentLocation = "school";

console.log(name, " is currently at ", currentLocation);
currentLocation = "park";
console.log(name, " is currently at ", currentLocation);
/*
7)
Crea variables per que el missatge s'imprimeixi
correctament a la consola!
*/
let person="Petra";
let place= "best restaurant in Italy";
let food = "their famous lasagna"
console.log(person, " went to the ", place, " to eat ", food, ".");

/*
8)
Ara, reassigna totes les variables anteriors per
imprimir un nou missatge a la consola!
*/
person="Fiona";
place="park";
food="grass";
console.log(person, " went to the ", place, " to eat ", food, ".");

/*
9)
Existeixen tres formes d'incrementar
el número emmagatzemat a la variable "count".
Tot i així, hi ha un problema amb la forma en què
aquesta variable ha estat declarada. Corregeix-la!
*/

let count = 0;
count = count + 1;
count += 1;
count++;

console.log(count, " should be 3");

/*
10)
Hora de permutar! Al codi de sota volem intercanviar
els valors emmagatzemats a "a" i "b".

El codi no funciona correctament. Per assolir aquesta
tasca hauràs de crear una variable adicional
(pots anomenar-la "temp") per desar "a" o "b" mentre
fas la permuta. Fes-te un esquema si ho necessites!
*/

let a = 1;
let b = 2;
console.log("BEFORE > a is: ", a, " - and b is: ", b);

let c=a;
let d=b;
a=b;
b=c;
console.log("AFTER > a is: ", a, " - and b is: ", b);

// a = b;
// b = a;

// console.log("AFTER > a is: ", a, " - and b is: ", b);

/*
11)
Fes que la següent afirmació resulti "true"!
*/

console.log(5 > 4);

/*
12)
Fes que la següent afirmació resulti "false".
*/

let x = 10;
let y = x++;

console.log(x > y);

/*
13)
Soluciona l'operador de comparació per què
l'afirmació següent resulti "false".
*/

console.log(3 === "3");

/*
14)
Modifica l'expressió de sota per què
no resulti "false".
*/

const sunny = true;
const warm = true;

console.log(sunny == warm);

/*
15)
Practica tot el que has après!

Inventa 10 expressions que facin servir el que
has après fins ara.
  - Fer servir els següents data types: `string`, `number`, `boolean`, `undefined` i `null`.
  - Fer servir els següents operadors: (+) (-) (\*) (/) (%).
  - Fer servir les paraules clau: var, const, let.
  - Fer servir els operadors: (=) (+=) (-=) (*=)(++) (- -).
  - Fer servir els operadors: (>) (<) (>=) (<=) (== vs ===) (!==).
*/
