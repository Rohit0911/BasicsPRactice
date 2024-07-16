function insor(ar){
    let i,k,j;
    for(let i=1;i<ar.length;i++){
        k=ar[i];
        j=i-1;

        while(j>=0 && ar[j]>k){
            ar[j+1]=ar[j];
            j=j-1;
        }
        ar[j+1]=k;


    }

    return ar;
}


let ar=[9,4,1,19,2,6];

console.log(insor(ar));

/*Output
[ 1, 2, 4, 6, 9, 19 ]
 *
*/