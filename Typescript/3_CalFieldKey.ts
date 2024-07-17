import { Fields } from "./data";
import { fieldList } from "./1_Prepare";

// console.log(fieldList);

// let calculatedfields=new Array();



const calculatedfields=fieldList.filter(item=>{
    if(item.calculatedFieldKey!=undefined){
        // calculatedfields.push(item.calculatedFieldKey);
        return item.calculatedFieldKey;
        
    }
}) 

// console.log(calculatedfields);

    


/*
// Fields.Dimensions.filter(function (item){
//     if(item.calculatedFieldKey){
//         const x=item.calculatedFieldKey;
//         console.log(item.calculatedFieldKey);
//         calculatedfields.push(item)
//     }
// })


// Fields.Measures.filter(function (item){
//     if(item.calculatedFieldKey){
//         const x=item.calculatedFieldKey;
//         console.log(item.calculatedFieldKey);
//         // calculatedfields.push(x);
//         calculatedfields.push(item);
//     }
// })


// console.log(calculatedfields,' ');

// export {calculatedfields}




// console.log(Fields.Dimensions.length);
// console.log(Fields.Details.length);
// console.log(Fields.Measures.length);


*/

export {calculatedfields}


