"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1_Prepare_1 = require("./1_Prepare");
// const a1=Fields.Details;
// const a2=Fields.Measures;
// const a3=Fields.Dimensions;
// const fieldList=[]
// Array.prototype.push.apply(fieldList,a1);
// Array.prototype.push.apply(fieldList,a2);
// Array.prototype.push.apply(fieldList,a3);
var pos = _1_Prepare_1.fieldList.map(function (x) { return x.entityName; }).indexOf('Discount');
console.log(pos);
// const pos=Fields.Measures.map(x=>x.entityName).indexOf('Discount')
// const pos1=Fields.Details.map(x=>x.entityName).indexOf('Discount')
// const pos2=Fields.Dimensions.map(x=>x.entityName).indexOf('Discount')
// console.log(pos);
// console.log(pos1);
// console.log(pos2);
// const updated=Fields.Measures.filter((x)=>x.entityName!='Discount')
var updated = __spreadArray(__spreadArray([], _1_Prepare_1.fieldList.slice(0, pos), true), _1_Prepare_1.fieldList.slice(pos + 1), true);
console.log(updated.length);
console.log(_1_Prepare_1.fieldList.length);
