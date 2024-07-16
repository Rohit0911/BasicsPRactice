import { Fields } from "./data";
import { fieldList } from "./1_Prepare";

const temp=Fields.Dimensions;

// const UpdatedField;
// UpdatedField.concat(temp);
// UpdatedField=


fieldList.filter(function (item){
    if(item.entityName=='City'){
        item.dataType="Numerical";
        item.isNumericDataType=true;
    }
})

// Fields.Dimensions.filter(function (item){
//     if(item.entityName=='City'){
//         item.dataType="Numerical"
//         item.isNumericDataType=true;

//     }
// })

console.log(fieldList);





// console.log(Fields.Dimensions);

/*
{
    isNumericDataType: true,
    entityName: 'City',
    variableType: 'categorical',
    dataType: 'Numerical',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16'
  },
*/

