const prompt = require("prompt-sync")();
let n=prompt("Enter the number : ")
let ans=1;
for(let i=1;i<=n;i++){
    ans*=i;
}


console.log(ans);

/*Enter the number : 12
479001600
* */