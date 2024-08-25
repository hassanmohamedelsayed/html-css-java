let arr=["hassan","mohamed","eltaweel"];
console.log(arr.length);
console.log(Math.random()*arr.length);
console.log(Math.floor(Math.random()*arr.length));
// console.log(Math.trunc(Math.random()*arr.length));
document.write(arr[Math.trunc(Math.random()*arr.length)]);