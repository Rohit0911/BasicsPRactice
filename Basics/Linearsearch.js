let a=[4,8,2,9,4,3];
let k=9
flag=false;

for(let i=0;i<a.length;i++){
    if(a[i]==k){
        flag=true;
        console.log(`Element ${k} found at ${i}th location`);
    }
}
if(!flag){
    console.log("ELement is absent");
}

/*
Output 
k=5 : ELement is absent
k=9 :Element 9 found at 3th location
*
*/
