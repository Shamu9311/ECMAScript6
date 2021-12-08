function newFunction(name, age, country){
    var name = name || 'Samuel';
    var age = age || 28;
    var country = country || 'EC';
    console.log(name, age, country);
}

//es6

function newFunction2(name = 'Samuel', age = 38, country = 'EC'){
    console.log(name, age, country);
}

newFunction2();
newFunction2("Fernando", 29, "Ecuador");

//Template
let hello ="Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilinea
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
console.log(lorem);


//Desestructuración de elementos
let person = {
    'name': 'Samuel',
    'edad': 28,
    'country': 'EC'
};

console.log(person.name, person.edad);

let {name} = person;
console.log(name);

//Operador de propagación

let team1 = ['Samuel', 'Fernando', 'Ricardo'];
let tema2 = ['Javier', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...tema2];
console.log(education);

//Let o Var

{
    var globalVAR = 'Global var'; //scope global
}
{
    let globalLet = 'Global LET'; //scope local
    console.log(globalLet);
}

console.log(globalVAR);


//Const
const a = 'b'; //No cambia el valor
//a = 'a';

//Objetos mejorada

let name = 'Samuel';
let age = 28;
//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);

//Funciones de tipo flecha

const names = [
    {name : 'Samuel', age: 28},
    {name : 'Fernando', age: 29}
];

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfName2 = names.map(item => console.log(item.name));
const listOfName3 = (names, age) => {
    console.log(item.name);
}
// const listOfName4 = name => {
//     console.log(name);
// }
// const square = num => num * num;


//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Hola"))
    .catch(error => console.log(error))


//Clases Módulos y Generadores
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));


//Imports y Exports de module.js
const hello = require('./module');
console.log(hello());



//Generators
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
