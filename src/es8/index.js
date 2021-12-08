const data = {
    frontend: "Samuel",
    backend: "Fernando",
    desing: "Ana"
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

//Object values
const data = {
    frontend: "Samuel",
    backend: "Fernando",
    desing: "Ana",
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//Padding
const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " ------"));
console.log("food".padEnd(12, ' -----'));

const ojb = {
    name: 'Samuel',
}

//Async Await
const helloWordl = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('hello World'), 3000)
            : reject(new Error('test Error'))
    })
}

const helloAsyn = async () => {
    const hello = await helloWordl();
    console.log(hello);
}
helloAsyn();

const anotherFUnction = async() => {
    try {
        const hello = await helloWordl();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};
anotherFUnction();