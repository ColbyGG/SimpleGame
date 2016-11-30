
var xval = 100;
var yval = 100;
var foodEaten = 0;

/*Key Down Event*/
document.addEventListener("keydown", function(e) {
var xval = Number(document.getElementById("van").getAttribute("x"));
var yval = Number(document.getElementById("van").getAttribute("y"));
var snackX = Number(document.getElementById("snack1").getAttribute("x"));
var snackY = Number(document.getElementById("snack1").getAttribute("y"));

var random = Math.floor((Math.random() * 650) + 0);
var random1 = Math.floor((Math.random() * 1000) + 0);
/*Left Movement */
  if (e.keyCode == 37) {
 xval -= 30;
       var move = document.getElementById("van");
  move.setAttribute("x", xval)
}/*Right Movement*/
  if (e.keyCode == 39) {
    xval += 30;
       var move = document.getElementById("van");
  move.setAttribute("x", xval)
  }
/*Downwards Movement*/
  if (e.keyCode == 38) {
 yval -= 30;
       var move = document.getElementById("van");
  move.setAttribute("y", yval)
  }
/*Upwards Movement*/
  if (e.keyCode == 40) {
    yval += 30;
       var move = document.getElementById("van");
  move.setAttribute("y", yval)
  }
/*Overlap*/
  if(xval >= snackX-75 && xval <= snackX+75 && yval >= snackY-75 && yval <= snackY+75 ){
    console.log(foodEaten);
    document.getElementById("snack1").setAttribute("x", random1)
    foodEaten += 1;
  }
})
