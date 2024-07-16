"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_Prepare_1 = require("./1_Prepare");
// fieldList.filter(function (item){
//     if(item.variableType=='geographical'){
//         fieldList.mappingDetails['unMappedLocationCount']==5;
//     }
// })
_1_Prepare_1.fieldList.forEach(function (x, y) {
    if (x.variableType == 'geographical') {
        x.mappingDetails.unMappedLocationCount = 5;
    }
});
console.log(_1_Prepare_1.fieldList);
