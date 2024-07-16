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
exports.fieldList = void 0;
var data_1 = require("./data");
var a1 = data_1.Fields.Details;
var a2 = data_1.Fields.Measures;
var a3 = data_1.Fields.Dimensions;
var fieldList;
// Array.prototype.push.apply(fieldList,a1);
// Array.prototype.push.apply(fieldList,a2);
// Array.prototype.push.apply(fieldList,a3);
// fieldList=a1.concat(a2).concat(a3);
exports.fieldList = fieldList = __spreadArray(__spreadArray(__spreadArray([], a1, true), a2, true), a3, true);
