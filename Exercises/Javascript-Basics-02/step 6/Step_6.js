document.querySelector("#name").addEventListener("mouseleave", function() {
  document.getElementById("image1").style.display = "none";
  document.getElementById("image2").style.display = "none";
  document.getElementById("image3").style.display = "none";
  document.getElementById("image4").style.display = "none";
  document.getElementById("image5").style.display = "none";
});
document.querySelector("#name").addEventListener("mouseleave", function() {
  document.getElementById("image1").src = "images/image1.jpg";
  document.getElementById("image2").src = "images/image2.jpg";
  document.getElementById("image3").src = "images/image3.jpg";
  document.getElementById("image4").src = "images/image4.jpg";
  document.getElementById("image5").src = "images/image5.jpg";
});
