// document.getElementById("image1").onmouseover = function() {mouseOver()};

// function mouseOver() {
//   document.getElementById("image1").src = "images/image1_2.jpg";
// }

// ="image1_2.jpg";
document.querySelector("#image1").addEventListener("mouseover", function() {
  this.src = "images/image1_2.jpg";
});
