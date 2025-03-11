
let x = "16px"

let y = 4

// convert x into an integer
let z = parseInt(x) - y

console.log(z)

console.log(parseInt("16"))

console.log(parseFloat("16.5"))

console.log(typeof(y))

// explicit conversion
y = String(y)

// implicit conversion
a = "10"
b = 2

c = a - b
console.log(c)

/////////////////////////////

let fn = "Danny"
let ln = "Devito"

console.log(fn + " " + ln)

// String interpolation
console.log(`${fn} Hello World Good Morning ${ln}`)

if (4 < 3) {
    console.log("Hello World")
} else {
    console.log("Goodbye World")
}


// Ternary operator
let result = (4 > 3) ? "Good to Go" : " Oh No";
console.log(result)

// Multi-Sided Selection
// if (4 < 3) {
//     console.log("Hey")
// }
// elseif(4 < 3) {
//     console.log("FOr life")
// }
// else {
//     console.log("Goodbye World")
// }