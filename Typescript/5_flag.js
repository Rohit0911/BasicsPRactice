"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var _1_Prepare_1 = require("./1_Prepare");
var temp = data_1.Fields.Dimensions;
// const UpdatedField;
// UpdatedField.concat(temp);
// UpdatedField=
_1_Prepare_1.fieldList.filter(function (item) {
    if (item.entityName == 'City') {
        item.dataType = "Numerical";
        item.isNumericDataType = true;
    }
});
// Fields.Dimensions.filter(function (item){
//     if(item.entityName=='City'){
//         item.dataType="Numerical"
//         item.isNumericDataType=true;
//     }
// })
console.log(_1_Prepare_1.fieldList);
// console.log(Fields.Dimensions);
