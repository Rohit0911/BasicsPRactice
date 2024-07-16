const s = "abbacdcced";
const mp = new Map();

for (let i = 0; i < s.length; i++) {
    if (mp.has(s[i])) {
        mp.set(s[i], mp.get(s[i]) + 1);
    } else {
        mp.set(s[i], 1);
    }
}


for (let [x, y] of mp) {
    console.log(x, y);
}


let maxi = Number.MIN_SAFE_INTEGER;
let ans = '';

for (let [x, y] of mp) {
    if (y > maxi) {
        ans = x;
        maxi = y;
    }
}
console.log();

console.log("The value with maximum frquency in a given string is : ",ans);


/*Output:
a 2
b 2
c 3
d 2
e 1

The value with maximum frquency in a given string is :  c
*
*/