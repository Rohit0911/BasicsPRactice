import { calculatedfields } from "./3_CalFieldKey";


let result=[];

calculatedfields.filter(function (item){
    if(item.variables=='numerical'){
        
    }
    result.concat(item.variables)
})

console.log(result);
