let questionEL = document.getElementsByClassName("question");
let answerEl = document.getElementsByClassName("answer");
let arrowEl = document.getElementsByClassName("arrow");
var i;
for (i = 0; i < questionEL.length; i++) {
  questionEL[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      var question = this;
      question.style.fontWeight = "400";
      var arrow = this.lastElementChild;
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "block";
   var question = this;
   question.style.fontWeight = "700";
   var arrow = this.lastElementChild;
    arrow.style.transform = "rotate(180deg)";
    }
  });
}
