let n=7
let ans=(n%2==0)?"Even":"ODD"
console.log(ans);

let mark=80
let grade=(mark>=90)?"A":(mark>70)?"B":(mark>40)?"C":"F"
console.log(grade)

let arr=[1,2,3];
let ar1=[6,8,9];
let arrMerge=[...arr,...ar1];
let arrCopy=[...arr,4,5];
console.log(arr);
console.log(arrMerge);
console.log(arrCopy);

let user={name:"Sriman",age:19}
let cls={dept:"ECE",section:"-C"}
let info={...user,...cls...}

