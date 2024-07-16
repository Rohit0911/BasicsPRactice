"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var c;
data_1.Fields.Measures.forEach(function (x) {
    // let c=x.datasetId;
    // Fields.Measures.push("datasetKey":c);
    // x.datasetId ="datasetKey"
    // const k=datasetKey;
    // x.datasetKey=x.datasetId
    var z = "datasetKey";
    var val = x.datasetId;
    x[z] = val;
});
console.log(data_1.Fields.Measures);
