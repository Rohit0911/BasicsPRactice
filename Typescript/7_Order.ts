import { Fields } from "./data"
import { fieldList } from "./1_Prepare";

let dataIndex=new Array();


Fields.Dimensions.forEach((x,y)=>{
    if(x.Parent==='Order Date'){
        dataIndex.push(y);
    }
})


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

export {dataIndex}
