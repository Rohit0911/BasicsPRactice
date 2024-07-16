"use strict";
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
// console.log(updated);
