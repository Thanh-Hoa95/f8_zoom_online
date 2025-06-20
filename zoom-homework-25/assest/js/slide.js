const slidesWrapper = document.querySelector(".slides-wrapper");
let slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pagination = document.querySelector(".pagination");

let currentIndex = 1;
let isTransitioning = false;
let interval;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.classList.add("clone");
lastClone.classList.add("clone");

slidesWrapper.appendChild(firstClone);
slidesWrapper.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll(".slide");

slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

for (let i = 0; i < slides.length - 2; i++) {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i + 1));
  pagination.appendChild(dot);
}

function updatePagination() {
  const dots = document.querySelectorAll(".pagination span");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[(currentIndex - 1 + dots.length) % dots.length].classList.add("active");
}

function goToSlide(index) {
  if (isTransitioning) return;
  isTransitioning = true;
  slidesWrapper.style.transition = "transform 0.6s ease";
  currentIndex = index;
  slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  updatePagination();

  setTimeout(() => {
    isTransitioning = false;

    if (slides[currentIndex].classList.contains("clone") && currentIndex === slides.length - 1) {
      slidesWrapper.style.transition = "none";
      currentIndex = 1;
      slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (slides[currentIndex].classList.contains("clone") && currentIndex === 0) {
      slidesWrapper.style.transition = "none";
      currentIndex = slides.length - 2;
      slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, 500);
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function startAutoplay() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
  clearInterval(interval);
}

slidesWrapper.addEventListener("mouseenter", stopAutoplay);
slidesWrapper.addEventListener("mouseleave", startAutoplay);

startAutoplay();
