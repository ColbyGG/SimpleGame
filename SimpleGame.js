var xval = 100;
var yval = 100;

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 37) {
 xval -= 30;
       var move = document.getElementById("van");
  move.setAttribute("x", xval)
  }

  if (e.keyCode == 39) {
    xval += 30;
       var move = document.getElementById("van");
  move.setAttribute("x", xval)
  }
})
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 38) {
 yval -= 30;
       var move = document.getElementById("van");
  move.setAttribute("y", yval)
  }

  if (e.keyCode == 40) {
    yval += 30;
       var move = document.getElementById("van");
  move.setAttribute("y", yval)
  }
})
