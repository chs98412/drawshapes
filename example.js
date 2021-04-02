var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    erase=document.getElementById('erase');
    shape= document.getElementById('shape');
    realcolor=document.getElementById('realcolor');
    wide=document.getElementById('wide');

   

context.lineWidth = 1;

context.font = '24px Helvetica';
//context.fillText('Click anywhere to erase', 175, 40);



function drawcircle(startx,starty,rad){
   
    context.arc(startx,starty,rad,Math.PI,Math.PI*3/1);
   
}
function drawrect(startx,starty,endx,endy){
   
    context.rect(startx,starty,Math.abs(startx-endx),Math.abs(starty-endy));
   
}


// context.canvas.onmousedown = function (e) {
//    context.clearRect(0, 0, canvas.width, canvas.height);
// };
realcolor.onchange=(e)=>{
    context.strokeStyle=realcolor.value;
  
    
}
shape.onchange=(e)=>{
    console.log(shape.value);
  
    
}
wide.onchange=(e)=>{
    context.lineWidth = wide.value;
   
}

canvas.onmousedown = function (e){
   x=e.offsetX;
   y=e.offsetY;
  
};
canvas.onmouseup = function (e){
    var startx= x;
    var starty=y;
    var endx=e.offsetX;
    var endy=e.offsetY;

    var rad=Math.sqrt( Math.pow(startx-endx,2) +  Math.pow(starty-endy,2)  ) /2;

         context.beginPath();
         if(shape.value=='Circle'){
         drawcircle(startx,starty,rad);}
         else{
    drawrect(startx,starty,endx,endy);}

 context.stroke();
   
 };



erase.onclick=function (e){

         context.clearRect(0, 0, canvas.width, canvas.height);
     
};
