function hamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*---------------------- Slider Range ---------------------*/
var slider_min = document.getElementById("myRange_min");
var slider_max = document.getElementById("myRange_max");
var output_min = document.getElementById("cost_min");
var output_max = document.getElementById("cost_max");
output_min.innerHTML = slider_min.value;
output_max.innerHTML = slider_max.value;

slider_min.oninput = function() {
  output_min.innerHTML = this.value;
}
slider_max.oninput = function() {
    output_max.innerHTML = this.value;
  }

  
/*----------------Slider-------------------*/
var current_slide = 0;

function modal_click(){
    current_slide = 1;
}

function modal_click_exit(){
    current_slide = 0;
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if(current_slide ===1 ){
  var slides = document.getElementsByClassName("mySlides_product");
  }
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = " block";  
  dots[slideIndex-1].className += " active";
}


