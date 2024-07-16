"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_Prepare_1 = require("./1_Prepare");
var NumericalItems = new Array();
_1_Prepare_1.fieldList.forEach(function (x, y) {
    if (x.isNumericDataType == true && x.dataType == 'float') {
        var val = x.subDatasetId;
        var newval = x.datasetId;
        x.subDatasetId = newval;
        NumericalItems.push(val);
    }
});
// console.log(fieldList);
console.log(NumericalItems);
