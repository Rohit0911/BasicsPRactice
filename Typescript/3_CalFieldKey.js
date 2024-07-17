"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatedfields = void 0;
var _1_Prepare_1 = require("./1_Prepare");
// console.log(fieldList);
// let calculatedfields=new Array();
var calculatedfields = _1_Prepare_1.fieldList.filter(function (item) {
    if (item.calculatedFieldKey != undefined) {
        // calculatedfields.push(item.calculatedFieldKey);
        return item.calculatedFieldKey;
    }
});
exports.calculatedfields = calculatedfields;
