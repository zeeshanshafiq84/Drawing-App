const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d");

let isDrawing = false;

window.addEventListener("load",() => {
    // setting canvas width /height... offset width/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;


});

const startDraw = () => {
    isDrawing = true;
}

const  drawing = (e) => {
    if(!isDrawing) return; // if isDrawing is false return from here 
    ctx.lineTo(e.offsetX, e.offsetY); // Creating line according to the mouse pointer 
    ctx.stroke(); // drawing / filling line with color
}

canvas.addEventListener("mousedown" ,startDraw);
canvas.addEventListener("mousemove" ,drawing);