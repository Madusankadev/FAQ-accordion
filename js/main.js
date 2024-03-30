// get element height and set margin

var faqBox = document.getElementById("faqBox");
var faqBoxHeight = faqBox.offsetHeight + "px";

var bgWhite = document.getElementById("bgWhite");
bgWhite.style.height = faqBoxHeight;

function toggleQ(ansId) {
    var ans = document.getElementById(ansId);
    ans.classList.toggle("hideContent");
    
}