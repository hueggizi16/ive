let button = document.getElementById('no');
let height = window.innerHeight - button.clientHeight;
let width = window.innerWidth - button.clientWidth;

console.log(Number(button.style.height))
console.log(Number(button.style.width))

button.addEventListener('mouseover', function(){
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
})

button.addEventListener('click', function(){
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
})