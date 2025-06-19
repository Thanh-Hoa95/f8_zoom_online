const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideshow = document.getElementById("slideshow");

let currentIndex = 0;
let isTransitioning = false;
let autoplayInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  if (isTransitioning) return;
  isTransitioning = true;

  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);

  setTimeout(() => (isTransitioning = false), 500);
}

function prevSlide() {
  if (isTransitioning) return;
  isTransitioning = true;

  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);

  setTimeout(() => (isTransitioning = false), 500);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

slideshow.addEventListener("mouseenter", stopAutoplay);
slideshow.addEventListener("mouseleave", startAutoplay);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);
startAutoplay();
