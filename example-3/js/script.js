document.onmousemove = function(evt){
    makeACircle(evt);   
}
/**
  *this method generates a red circle div
  *where the user clicks
  *
  *@param evt the info about the click
  */
function makeACircle(evt){ 
    //generate a div
    var circle = document.createElement("div");
    //set its horizontal position to that of the cursor:
    circle.style.left = evt.clientX+'px';
    //set its horizontal position to that of the cursor:
    circle.style.top = evt.clientY+'px';
    //adds it to the HTML as child of <body>
    document.body.appendChild(circle);
}