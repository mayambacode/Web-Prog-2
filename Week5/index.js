// Accessing DOM elements

//  let p1 = document.body.firstElementChild


let p1 = document.getElementById("myp1")

// let p1 = document.getElementsByTagName("p")[1];

// let p1 = document.getElementsByName("pname")[0];

// let p1 = document.getElementsByClassName("c2")[0]

// let p1 = document.querySelectorAll("p")[0]



console.log("classes = ", p1.classList)

p1.textContent = "got this element by id"
p1.classList.add("c1")

function toggle(){ 
    let p1 = document.getElementById("myp1")
    if(p1.classList.contains("c1")){
        p1.classList.remove("c1")
        p1.classList.add("c2")
    }else{ 
        p1.classList.remove("c2")
        p1.classList.add("c1")
    }
}

function myToggle(){
    let p1 = document.getElementById("myp1")
    p1.classList.toggle("c1")
}

function hideNShow(){
    let p1 = document.getElementById("myp1")

    // if(p1.style.display == "none"){
    //     p1.style.display = "block"
    // }else{
    //     p1.style.display = "none"
    // }

    p1.style.display = p1.style.display == "none" ? "block" : "none";
}

let images = ["img1", "img2", "img3"]
for( let i =0; i , i < images.length; i++ ){
    console.log(images[i])
}

for (let im of images){
    console.log(im)
}

// Add h1 in p1 tag

// let myh1 = document.createElement("h1")
// myh1.textContent = "Hello World!"

// p1.prepend(myh1) // doesn't work

// p1.append(myh1)
// p1.append(myh1.cloneNode(true))

// let myh2 = document.createElement("h1")
// myh2.textContent = "Good Morning!"

// p1.replaceWith(myh2)

let myh1 = document.createElement("h1")

myh1.append(document.createTextNode("<h1>something</h1>"))

p1.append(myh1)