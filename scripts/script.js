/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// set initial number
let count = 0;

//select value
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

function increment() {
  count++;
  value.textContent = count;
  colorchange();
}
function decrement() {
  count--;
  value.textContent = count;
  colorchange();
}
function reset() {
  count = 0;
  value.textContent = count;
  colorchange();
}
function colorchange() {
  if (count > 0) {
    value.style.color = "green";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  if (count === 0) {
    value.style.color = "#222";
  }
  if (count > 1000) {
    value.style.color = gold;
  }
}






// OLD CODE // OLD CODE // OLD CODE // OLD CODE // OLD CODE //
// btns.forEac(function (btn) {h
//     btn.addEventListener('click',function(e) {
//     const styles = e.currentTarget.classList;
//     console.log(styles);
//     if(styles.contains('decrease')){
//         count--;
//     }
//     else if(styles.contains('increase')){
//         count++;
//     }
//     else{
//         count = 0
//     }
//     if(count > 0){
//         value.style.color = 'green'
//     }
//     if(count < 0){
//         value.style.color = 'red'
//     }
//     if(count === 0){
//         value.style.color = '#222'
//     }
//     if(count > 1000){
//         value.style.color = gold
//     }

//      value.textContent = count;
//     });

// });

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}