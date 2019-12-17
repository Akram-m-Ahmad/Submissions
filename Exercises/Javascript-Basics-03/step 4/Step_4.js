document.querySelector("button").addEventListener("click", function() {
  if (
    document.getElementById("password").value !=
    document.getElementById("confirmation").value
  ) {
    document.getElementById("confirmation").style.border = "red 1px solid";
    document.getElementById("password").style.border = "red 1px solid";
  }
});
