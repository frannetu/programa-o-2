const prompt = require('prompt-sync')({sigint: true});

console.log("ola mundo");

let nome = prompt("qual e o seu nome?");
console.log(`ola ${nome}`);
