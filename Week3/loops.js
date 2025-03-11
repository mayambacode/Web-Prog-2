
// for (let i = 1; 1 <= 10; i++) {
//     if (i == 7) {
//         break;
//     }
//     console.log(i);
// }

let x = 1;

while (x <= 10) {
    console.log("x = " + x);
    x++;
}

let y = 1;
do { 
    console.log("y = " +  y);
    y++;
}
while (x <= 10);

////////////////////////////////////////////////////////////////

// Arrays
let var1 = 10;
let var2 = 20;
let var3 = 30;

let myValue = [10, "cat", 30];

console.log(myValue[1])

for (let v of myValue) {
    console.log(v);
}