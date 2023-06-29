let questionEL = document.getElementsByClassName(".question");   
let answerEl = document.getElementsByClassName(".answer");  
var i;
for (i = 0; i < questionEL.length; i++) {
  questionEL[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
