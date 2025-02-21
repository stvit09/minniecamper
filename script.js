const imageUrls = [
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155333.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155342.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155350.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155416.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155513.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155520.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155526.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155623.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155629.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155646.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155702.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155724.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155728.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155748.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155805.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155816.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155820.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155840.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155852.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155857.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155900.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_155911.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160120.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160332.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160420.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160429.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160629.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160655.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160727.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160735.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160742.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160745.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160815.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160818.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160824.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160837.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160849.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160902.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160912.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160932.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_160954.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161023.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161028.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161054.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161124.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161135.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161137.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161145.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161151.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161202.jpg",
  "https://minniecamper02212025.s3.amazonaws.com/images/20240709_161208.jpg"
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
