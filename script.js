const imageUrls = [
  "https://minniecamper02212025.s3.amazonaws.com/images/20240702_181644.jpg",
	  "https://minniecamper02212025.s3.amazonaws.com/images/20240702_181648.jpg",
	  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155333.jpg",
];
	
let currentIndex = 0;

function showImage(index) {
  const imageElement = document.getElementById("rotatingImage");
  imageElement.src = imageUrls[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  showImage(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
});
