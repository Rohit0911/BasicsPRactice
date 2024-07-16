"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var _7_Order_1 = require("./7_Order");
data_1.Fields.Dimensions.forEach(function (x, y) {
    if (_7_Order_1.dataIndex.indexOf(y) != -1) {
        console.log("Entity name is : ".concat(x.entityName));
    }
});
