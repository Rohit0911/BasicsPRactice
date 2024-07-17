import { fieldList } from "./1_Prepare";
import { Fields } from "./data";

// fieldList.filter(function (item){
//     if(item.variableType=='geographical'){
//         fieldList.mappingDetails['unMappedLocationCount']==5;
//     }
// })


// Best ***
fieldList.forEach((x,y)=>{
    if(x.variableType=='geographical'){
        x.mappingDetails.unMappedLocationCount=5;
    }
})


// console.log(fieldList);

/*
Output:
{
    isNumericDataType: false,
    entityName: 'State',
    variableType: 'geographical',
    dataType: 'text',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    mappingDetails: { unMappedLocationCount: 5, message: '' }
  },
*/
