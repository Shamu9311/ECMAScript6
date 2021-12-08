//Operador reposo: extrae las caracteristicas de un objeto que aun no se ha construido.
const obj = {
    name: 'Samuel',
    age: 28,
    country: 'Ec'
};

// let {name, ...all} = obj;
// console.log(name, all);

let {country, ...all} = obj;
console.log(all);

//Unir elementos con las funcionalidades de propagacion
const obj = {
    name: 'Samuel',
    age: 28,
};

const obj1 = {
    ...obj,
    country: 'Ec'
};
console.log(obj1);

//Promise finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)//resolve('Hello World')
        : reject(new Error('Test error'))
    });
};
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//Mejora de regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2019-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
