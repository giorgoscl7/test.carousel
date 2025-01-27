const slides = document.getElementsByClassName("slides");
let activeSlide = 0;

function setSlide(activeIndex) {
  for (let index = 0; index < slides.length; index++) {
    if (index === activeIndex) {
      slides[index].classList.remove("displayNone");
      slides[index].classList.add("displayBlock");
    } else {
      slides[index].classList.add("displayNone");
      slides[index].classList.remove("displayBlock");
    }
  }
}

function startLoop() {
  activeSlide += 1;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setSlide(activeSlide);
}

function setPreviousSlide() {
  
  clearInterval(slideInterval);

  
  activeSlide -= 1;

  
  setSlide(activeSlide);
}

function setNextSlide() {
  clearInterval(slideInterval);
  activeSlide += 1;
  setSlide(activeSlide);
}
const slideInterval = setInterval(startLoop, 2000);