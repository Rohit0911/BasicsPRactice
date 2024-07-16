"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _3_CalFieldKey_1 = require("./3_CalFieldKey");
var result = [];
_3_CalFieldKey_1.calculatedfields.filter(function (item) {
    result.concat(item.variables);
});
console.log(result);
