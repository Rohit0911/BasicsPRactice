let a=[
    [1,4,6],
    [3,5,8],
    [2,4,1]
]

let b=[
    [5,9,8],
    [2,1,0],
    [4,3,4]
]

// let c=[];
// // c=a+b;

let c = Array(a.length).fill(null).map(() => Array(a[0].length).fill(0));

// console.log(c);
for(let i=0;i<c.length;i++){
    let r="";
    for(let j=0;j<c[0].length;j++){
      c[i][j]= a[i][j]+b[i][j];
    }

}


c.forEach(row=>console.log(row));


/*
Output :
[ 6, 13, 14 ]
[ 5, 6, 8 ]
[ 6, 7, 5 ]
 *
*/