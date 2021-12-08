const string = 'JavaScritpt es maravilloso, con JavaScritpt puedo crear el futuro de la web';
const replacedString = string.replace('JavaScritpt', 'Python');
console.log(replacedString);

//nuevo método
const replacedString2 = string.replaceAll('JavaScritpt', 'Python');
console.log(replacedString2);

//Métodos privados
class Massage{
    #show(val){
        console.log(val);
    };
    get #add(val){
        //...
    }
}

const message = new Massage();
message.show('Hola');

//Promise any
const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element);
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    //{...}
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
