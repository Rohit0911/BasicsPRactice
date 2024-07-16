import { fieldList } from "./1_Prepare";


let NumericalItems=new Array();

fieldList.forEach((x,y)=>{
    if(x.isNumericDataType==true && x.dataType=='float'){
        let val=x.subDatasetId;
        let newval=x.datasetId;
        x.subDatasetId=newval;

        NumericalItems.push(val);

    }
})


// console.log(fieldList);

console.log(NumericalItems);



/*
NumericalItems=
[
  '95896f9e-c422-435d-bf1f-ad85e1aefd16',
  '95896f9e-c422-435d-bf1f-ad85e1aefd16',
  '95896f9e-c422-435d-bf1f-ad85e1aefd16',
  '95896f9e-c422-435d-bf1f-ad85e1aefd16',
  '95896f9e-c422-435d-bf1f-ad85e1aefd16',
  '95896f9e-c422-435d-bf1f-ad85e1aefd16',
  '95896f9e-c422-435d-bf1f-ad85e1aefd16' 
]


*/