var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
var width = screen.width
new_width = screen.width - 100
new_height = screen.height - 300
if (width < 992) {
    document.getElementById("myCanvas").width = new_width
    document.getElementById("myCanvas").height = new_height
    document.body.style.overflow = "hidden"
}

canvas.addEventListener("touchstart", touch_start);

function touch_start(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
}

canvas.addEventListener("mousedown", mouse_down)
function mouse_down(e){
    mouseEvent="mousedown"
    canvas_color=document.getElementById("color").value 
    line_width=document.getElementById("width_").value 
}

canvas.addEventListener("mousemove", mouse_move)
function mouse_move(e){
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=canvas_color
        ctx.lineWidth=line_width

        console.log("Last Position of X="+ lastX + ",Last Position of Y="+ lastY)
        ctx.moveTo(lastX,lastY)

        console.log("current Position of X="+ currentx + ",Current postion of Y=" + currenty)
        ctx.lineTo(currentx,currenty)
        ctx.stroke()
    }
    lastX=currentx 
    lastY=currenty
}
canvas.addEventListener("mouseup",mouse_up)
function mouse_up(e){
      mouseEvent="mouse_up"
}
canvas.addEventListener("mouseleave",mouse_leave)
function mouse_leave(e){
      mouseEvent="mouse_leave"
}