import {Fields} from "./data";
import { dataIndex } from "./7_Order";



Fields.Measures.forEach((x)=>{
    // let c=x.datasetId;
    // Fields.Measures.push("datasetKey":c);
    // x.datasetId ="datasetKey"
    // const k=datasetKey;
    // x.datasetKey=x.datasetId

    let z:string ="datasetKey";
    let val=x.datasetId;

    x[z]=val;
    
    const {datasetId, ...newobj}=x;
    console.log(newobj);
    
})




// Fields.Measures.forEach((x,y)=>{

// })


// Slice and splice difference 
// USed to to rmmove the any key:val

// const updated=Fields.Measures.filter((x)=>x.datasetId!='Discount')

// Fields.Measures.filter((x)=>!x.datasetId)



// console.log(Fields.Measures);


/**
 Output:
 [  
  {
    isNumericDataType: true,
    entityName: 'Row ID',
    variableType: 'numerical',
    dataType: 'integer',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  },
  {
    isNumericDataType: true,
    entityName: 'Postal Code',
    variableType: 'numerical',
    dataType: 'float',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  },
  {
    isNumericDataType: true,
    entityName: 'Sales',
    variableType: 'numerical',
    dataType: 'float',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  },
  {
    isNumericDataType: true,
    entityName: 'Quantity',
    variableType: 'numerical',
    dataType: 'integer',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  },
  {
    isNumericDataType: true,
    entityName: 'Discount',
    variableType: 'numerical',
    dataType: 'float',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  },
  {
    isNumericDataType: true,
    entityName: 'Profit',
    variableType: 'numerical',
    dataType: 'float',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  },
  {
    isNumericDataType: true,
    entityName: 'Blank Column',
    variableType: 'numerical',
    dataType: 'float',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  },
  {
    calculatedFieldKey: 'aab7d6bc-2947-42b7-9923-c6fec9471978',
    variables: [ [Object], [Object] ],
    isCalCache: false,
    isCalculatedField: 'True',
    parameters: [],
    parameterNameList: [],
    isValid: 'True',
    isNumericDataType: true,
    entityName: 'Cal2',
    variableType: 'numerical',
    dataType: 'float',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  },
  {
    calculatedFieldKey: '9ebc4055-8b67-42f3-a6eb-2a49acddb80f',
    variables: [ [Object], [Object] ],
    isCalCache: false,
    isCalculatedField: 'True',
    parameters: [],
    parameterNameList: [],
    isValid: 'True',
    isNumericDataType: true,
    entityName: 'Cal1',
    variableType: 'numerical',
    dataType: 'float',
    datasetId: '0d455a70-942d-498b-80fe-68604d4b41b1',
    subDatasetId: '95896f9e-c422-435d-bf1f-ad85e1aefd16',
    datasetKey: '0d455a70-942d-498b-80fe-68604d4b41b1'
  }
]
 */