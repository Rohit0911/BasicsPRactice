import { calculatedfields } from "./3_CalFieldKey";


let result=new Array();

// calculatedfields.filter(function (item){
//     if(item.variables){
        
//         result.concat(item.variables)
//     }


// })

for(let i=0;i<calculatedfields.length;i++){

    
    result.push(...calculatedfields[i].variables);
    
}


let finalArray = new Array();

// result.map(x=>{
//     if(x.variableType=='numerical'){
//         // console.log(x);
//         // finalArray.push(x)
        
//     }


// })

// finalArray=result.filter(x=>x.variableType).reduce((p,q)=>p.concat(x))

finalArray=result.filter(x=>{
    if(x.variableType=='numerical'){
        return x
    }
})











// console.log(result);
console.log(finalArray);
