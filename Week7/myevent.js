
let ln = document.getElementById("ln");

ln.onclick = function() { 
    console.log(ln.value);
}

ln.onmouseover = function() {
    ln.style.color = (ln.style.color == "red") ? "blue" : "red";
}

function foo() {
    console.log("event is fired");
}