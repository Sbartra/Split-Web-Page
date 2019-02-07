var doc = document;
var right = doc.querySelector(".right");
var left = doc.querySelector(".left");
var container = doc.querySelector(".container");

left.addEventListener("mouseenter", function (){
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", function (){
    container.classList.remove("hover-left");
});

left.addEventListener("mouseenter", function (){
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", function (){
    container.classList.remove("hover-left");
});
