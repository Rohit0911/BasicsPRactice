import { Fields } from "./data";

const a1=Fields.Details;
const a2=Fields.Measures;
const a3=Fields.Dimensions;


let fieldList;


// Array.prototype.push.apply(fieldList,a1);
// Array.prototype.push.apply(fieldList,a2);
// Array.prototype.push.apply(fieldList,a3);

// fieldList=a1.concat(a2).concat(a3);

fieldList=[...a1, ...a2, ...a3]




// console.log(fieldList);

export {fieldList}
