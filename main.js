function calculateTip() {
  var amount = document.getElementById("amount").value;
  var quality = document.getElementById("quality").value;
  var numOfPeople = document.getElementById("people").value;
  if (amount === "" || quality == 0) {
    alert("Please enter values");
    return;
  }
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  var total = (amount * quality) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
