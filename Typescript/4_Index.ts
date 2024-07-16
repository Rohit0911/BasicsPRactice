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



// const updated=Fields.Measures.filter((x)=>x.entityName!='Discount')

// console.log(updated);
