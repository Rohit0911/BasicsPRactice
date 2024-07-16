import { fieldList } from "./1_Prepare";


const result=fieldList.filter(function (item){
    return item.variables
})

console.log(result);
