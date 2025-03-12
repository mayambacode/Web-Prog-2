
let sp = document.getElementById('sp');

/* sp.onclick = function(e) {
    // console.log("x = " + e.offsetX);
    // console.log("y = " + e.offsetY);
    console.log(e.target.nodeName);
}
 */

/* sp.onclick = function(e) {
    console.log("Hello World")
} */

sp.addEventListener('click', function(e) {
    console.log(e.target.nodeName);
});
sp.addEventListener('click', function(e) {
    console.log("Hello World");
});
