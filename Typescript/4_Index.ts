import { Fields } from "./data";
import { fieldList } from "./1_Prepare";


// const a1=Fields.Details;
// const a2=Fields.Measures;
// const a3=Fields.Dimensions;


// const fieldList=[]
// Array.prototype.push.apply(fieldList,a1);
// Array.prototype.push.apply(fieldList,a2);
// Array.prototype.push.apply(fieldList,a3);


const pos=fieldList.map(x=>x.entityName).indexOf('Discount');

console.log(pos);



// const pos=Fields.Measures.map(x=>x.entityName).indexOf('Discount')

// const pos1=Fields.Details.map(x=>x.entityName).indexOf('Discount')

// const pos2=Fields.Dimensions.map(x=>x.entityName).indexOf('Discount')



// console.log(pos);
// console.log(pos1);
// console.log(pos2);


/* DEleting using Filter
// const updated=Fields.Measures.filter((x)=>x.entityName!='Discount')


Deleting using Slice: Where we need to create another array to store the changes
// const updated=[...fieldList.splice(0,pos), ...fieldList.splice(pos+1)]

*/

// SPLICE : Here we can make changes into original array  
fieldList.splice(pos,1);

// console.log(updated.length);
console.log(fieldList.length);

console.log(fieldList);



