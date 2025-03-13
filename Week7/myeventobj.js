
let myobj = {
    count: 0,
    handleEvent() {
        this.count++;
        console.log(this.count)
    }
}

// class

class ButtonHandler {
    constructor() {
        this.count = 0;
    }

    handleEvent() {
        this.count++;
        console.log("time clicked = " + this.count);
    }
}

let sp = document.getElementById('sp');

sp.addEventListener("click", new ButtonHandler());


let fp = document.getElementById('fp');

fp.addEventListener("click", new ButtonHandler());


