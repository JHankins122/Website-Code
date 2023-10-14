//slideshow
function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
var randI = getRandomInt(3);
var slideIndex = randI;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  
  
}