var foodEaten = 0;
var timeStart = Date.now();
/*Key Down Event*/
document.addEventListener("keydown", function(e) {
var xval = Number(document.getElementById("van").getAttribute("x"));
var yval = Number(document.getElementById("van").getAttribute("y"));
var snackX = Number(document.getElementById("snack1").getAttribute("x"));
var snackY = Number(document.getElementById("snack1").getAttribute("y"));
var snackX2 = Number(document.getElementById("snack2").getAttribute("x"));
var snackY2 = Number(document.getElementById("snack2").getAttribute("y"));

var random = Math.floor((Math.random() * 1000) + 0);
var random2 = Math.floor((Math.random() * 1000) + 0);

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
    document.getElementById("snack1").setAttribute("x", random);
    foodEaten += 1;
    document.getElementById("score").textContent = foodEaten;
  }
  /*Overlap 2*/
  if(xval >= snackX2-75 && xval <= snackX2+75 && yval >= snackY2-75 && yval <= snackY2+75 ){
    console.log(foodEaten);
    document.getElementById("snack2").setAttribute("x", random2);
    foodEaten += 1;
    document.getElementById("score").textContent = foodEaten;
  }
/*End of Game*/
  if(foodEaten == 10){
    document.getElementById("game").pauseAnimations();
    var timeStop = Date.now();
    var theend = timeStop - timeStart;
    var endofgame = Math.round(theend/1000);
    document.getElementById("end").textContent = endofgame;
    document.getElementById("seconds").setAttribute("opacity", 1);
    document.getElementById("box").setAttribute("opacity", 1);
    document.getElementById("finishedin").setAttribute("opacity", 1);
  }
})
