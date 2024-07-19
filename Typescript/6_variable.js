"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _3_CalFieldKey_1 = require("./3_CalFieldKey");
var result = new Array();
// calculatedfields.filter(function (item){
//     if(item.variables){
//         result.concat(item.variables)
//     }
// })
for (var i = 0; i < _3_CalFieldKey_1.calculatedfields.length; i++) {
    result.push.apply(result, _3_CalFieldKey_1.calculatedfields[i].variables);
}
var finalArray = new Array();
// result.map(x=>{
//     if(x.variableType=='numerical'){
//         // console.log(x);
//         // finalArray.push(x)
//     }
// })
// finalArray=result.filter(x=>x.variableType).reduce((p,q)=>p.concat(x))
finalArray = result.filter(function (x) {
    if (x.variableType == 'numerical') {
        return x;
    }
});
// console.log(result);
console.log(finalArray);
