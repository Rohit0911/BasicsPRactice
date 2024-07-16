import {Fields} from "./data";
import { dataIndex } from "./7_Order";

Fields.Dimensions.forEach((x,y)=>{
    if(dataIndex.indexOf(y)!=-1){
        console.log(`Entity name is : ${x.entityName}`);
        
    }
})




/*
Output:
[ 2, 3, 4, 5, 6, 7 ]
Entity name is : Order Date_Year   
Entity name is : Order Date_Quarter
Entity name is : Order Date_Month  
Entity name is : Order Date_Day
Entity name is : Order Date_Weekday
Entity name is : Order Date_Week number

*/






