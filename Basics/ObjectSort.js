myDict = {'Ashwin': 100,
           'rakesh': 9,
          'Ravindra': 25,
           'yash': 200, 
           'sai': 32}


for(let i in myDict){
    if(myDict.hasOwnProperty(i)){
        val=myDict[i];
        console.log(i,val);
    }
}


let sortt=[];

for(let i in myDict){
    sortt.push([i,myDict[i]]);
}


sortt.sort(function(a,b){
    return a[1]-b[1];
});



    console.log(sortt);

/*
Output:
Ashwin 100
rakesh 9
Ravindra 25
yash 200
sai 32

Sorted:
[
  [ 'rakesh', 9 ],
  [ 'Ravindra', 25 ],
  [ 'sai', 32 ],
  [ 'Ashwin', 100 ],
  [ 'yash', 200 ]
]
  *
*/



