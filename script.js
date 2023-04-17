const sliderContainer = document.querySelector('.slider-container');
const images = sliderContainer.querySelectorAll('img');

let currentImageIndex = 0;

showImage(currentImageIndex);
function showImage(index) {
  images.forEach(image => image.style.opacity = 0);
  images[index].style.opacity = 1;
  images[index].style.transition = "opacity 1s ease-in-out";
}
function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}
setInterval(showNextImage, 4500);