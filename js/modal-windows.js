var link = document.querySelector(".write-us");
var feedback = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
} );


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
} );
