// Elements
const navBarEl = document.querySelector('.nav-bar');
const sliderIndicator1El = document.querySelector('.si-1');
const sliderIndicator2El = document.querySelector('.si-2');
const sliderIndicator3El = document.querySelector('.si-3');
const sliderNextArrowEl = document.querySelector('.next-cont');
const sliderPrevArrowEl = document.querySelector('.prev-cont');
const navIcon1 = document.querySelector('#nav-icon1');
const mobileNavOpen = document.querySelector('.mobile-nav-open');

//// Slider ////

// Update slider arrows and indicators after every slide change
$('.slider').on('afterChange', function (event, slick, currentSlide) {
  sliderControls(currentSlide);
});

// Slider Indicator 1 starts with full opacity
sliderIndicator1El.style.opacity = '1';

// Slider Prev Arrow starts with zero opacity and is unclickable
sliderPrevArrowEl.style.pointerEvents = 'none';
sliderPrevArrowEl.style.opacity = '.35';

// Slider Arrows and Indicators - Set opacity and pointer-events
const sliderControls = (currentSlide) => {
  if (currentSlide === 0) {
    // Slider Arrows Opacity and Pointer-Events
    sliderPrevArrowEl.style.pointerEvents = 'none';
    sliderNextArrowEl.style.pointerEvents = 'auto';
    sliderPrevArrowEl.style.opacity = '.35';
    sliderNextArrowEl.style.opacity = '1';
    // Indicator Opacities
    sliderIndicator1El.style.opacity = '1';
    sliderIndicator2El.style.opacity = '.35';
    sliderIndicator3El.style.opacity = '.35';
  } else if (currentSlide === 1) {
    // Slider Arrows Opacity and Pointer-Events
    sliderPrevArrowEl.style.pointerEvents = 'auto';
    sliderNextArrowEl.style.pointerEvents = 'auto';
    sliderPrevArrowEl.style.opacity = '1';
    sliderNextArrowEl.style.opacity = '1';
    // Indicator Opacities
    sliderIndicator1El.style.opacity = '.35';
    sliderIndicator2El.style.opacity = '1';
    sliderIndicator3El.style.opacity = '.35';
  } else if (currentSlide === 2) {
    // Slider Arrows Opacity and Pointer-Events
    sliderPrevArrowEl.style.pointerEvents = 'auto';
    sliderNextArrowEl.style.pointerEvents = 'none';
    sliderPrevArrowEl.style.opacity = '1';
    sliderNextArrowEl.style.opacity = '.35';
    // Indicator Opacities
    sliderIndicator1El.style.opacity = '.35';
    sliderIndicator2El.style.opacity = '.35';
    sliderIndicator3El.style.opacity = '1';
  }
};

// Hamburger Menu Animation
$(document).ready(function () {
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
    $(this).toggleClass('open');
  });
});

// Open Mobile Nav Menu
let mobileNavMenuStatus = 'closed';
navIcon1.addEventListener('click', () => {
  if (mobileNavMenuStatus === 'closed') {
    // mobileNavOpen.style.visibility = 'visible';
    // mobileNavOpen.style.opacity = '1';
    mobileNavOpen.classList.add('mobile-ease');
    mobileNavMenuStatus = 'open';
  } else {
    // mobileNavOpen.style.visibility = 'hidden';
    // mobileNavOpen.style.opacity = '0';
    mobileNavOpen.classList.remove('mobile-ease');
    mobileNavMenuStatus = 'closed';
  }
});

// Change img src depending on viewport width
function myFunction(imgChange) {
  if (imgChange.matches) {
    // If media query matches
    document.querySelector('.slide-image-1').src = '/assets/slide-1.png';
    document.querySelector('.slide-image-2').src = '/assets/slide-2.png';
    document.querySelector('.slide-image-3').src = '/assets/slide-3.jpg';
  } else {
    document.querySelector('.slide-image-1').src =
      '/assets/slide-1@2x-2560x700.png';
    document.querySelector('.slide-image-2').src =
      '/assets/slide-2@2x-2560x700.png';
    document.querySelector('.slide-image-3').src =
      '/assets/slide-3@2x-2560x700.jpg';
  }
}

var imgChange = window.matchMedia('(max-width: 1280px)');
myFunction(imgChange); // Call listener function at run time
imgChange.addListener(myFunction); // Attach listener function on state changes
