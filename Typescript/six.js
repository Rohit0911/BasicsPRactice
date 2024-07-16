"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_Prepare_1 = require("./1_Prepare");
var result = _1_Prepare_1.fieldList.filter(function (item) {
    return item.variables;
});
console.log(result);
