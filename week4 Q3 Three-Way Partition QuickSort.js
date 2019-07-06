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
        line = line.toString().split(' ').map(num => {parseInt(num)});
        input.push(line);
    }

    if (input.length === 2){
        threewayQuickSort(input,0,input.length-1);
        for(let i = 0; i < input.length; i++){
            process.stdout.write(`${input[i]} `);
        }
        process.exit();
    }
}

function threewayQuickSort(input,left,right){
    if (left < right){

        // split the data into two parts 
        let pivot = partition(input,left,right);

        //call quicksort with the left side
        threewayQuickSort(input,left,pivot-1);

        //call quicksort with the right side
        threewayQuickSort(input, pivot+1,right);
    }
}

function partition(input,left,right){
    //choose a pivot: goal is to choose a pivot that is the 
    //median number to lessen the depth of the recurrence tree 

    let pivot = input[right];
    let i = left - 1;

    for(let j = left; j < right; j++){

        if (input[j] === pivot){
            i = i + 1;
        }
        if (input[j] < pivot){
            i = i + 1;
            swap(input,i,j);
        }

    }
    swap(input,i+1,right);
    return i+1;
}

function swap(arr,left,right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

console.log(threewayQuickSort([4,5,3,8,9,7],0,5))

