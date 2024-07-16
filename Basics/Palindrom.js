// let num="123321";
function isCheck(x){

    let l=0,r=x.length-1
    while(l<=r){
        if(x[l++]!=x[r--]){
            return false;
        }
    }
    return true;

}

let num=[123321,34234,77];

for(let i=0;i<num.length;i++){
    let x=num[i].toString();
    if(isCheck(x)){
        console.log(x, ": True");
    }else{
        console.log(x , ": False");
    }
}


/*Output:
123321 : True
34234 : False
77 : True
*
*/