let arrya = [1,2,3, [1,2,3, [1,2,3]]];
console.log(arrya.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]));

let hello = '               Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello = ' Hello World               ';
console.log(hello);
console.log(hello.trimEnd());

try{

}catch{
    console.error();
}

//From entries
let entries = [['name', 'Samuel'], ['age', 28]];
console.log(Object.fromEntries(entries));

//Objeto de tipo simbolo para acceder a una descripcion
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);