const prompt = require("prompt-sync")();

// let l=10,r=30;
var l=prompt("Enter first number :");
var r=prompt("Enter second number :");
primearray=[];

for(let i=l;i<=r;i++){
    let flag=true;
    for(let j=2;j<=Math.sqrt(i);j++){
        if(i%j===0){
            flag=false;
            break;
        }
        
    }
    if(flag){
        primearray.push(i);
    }
}

console.log(primearray);


/**
Output:
Enter first number :54
Enter second number :99
[
  59, 61, 67, 71, 73,
  79, 83, 89, 97
]



*/