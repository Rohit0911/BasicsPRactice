"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataIndex = void 0;
var data_1 = require("./data");
var dataIndex = new Array();
exports.dataIndex = dataIndex;
data_1.Fields.Dimensions.forEach(function (x, y) {
    if (x.Parent === 'Order Date') {
        dataIndex.push(y);
    }
});
// const pos=Fields.Dimensions.map(x=>x.Parent).indexOf('Order Date')
// dataIndex.push(pos)
// Fields.Dimensions.forEach((obj)=>{
//     if(obj.Parent=='Order Date'){
//         let pos =Fields.Dimensions.findIndex(obj.Parent)
//     }
//     // const pos=Fields.Dimensions.map(obj=>obj.Parent).indexOf('Order Date');
//     // dataIndex.push(pos);
// })
console.log(dataIndex);
