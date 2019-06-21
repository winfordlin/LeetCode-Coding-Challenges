const readline = require('readline');

let input = [];

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
})

rl.on('line',readLine);

function readLine(line){
    if (line !== '\n'){
        line = line.toString()
        .split(' ')
        .map(num => parseInt(num));
        input.push(line);
    }

    let n = input[0];
    let num = input[1];

    if (input.length === 2){
        console.log(majorityElement(num));
    }
}

function majorityElement(num){
    if num 
}

console.log(majorityElement(2,124554847,2,941795895,2,2,2,2,792755190,756617003))