let currentIndex = 0;
const imgblockItems = document.querySelectorAll('.imgblock-item');

function goToSlide(index) {
    if (index &lt, 0) {
        index = imgblockItems.lenght - 1;

    }
    else if (index &gt == imgblockItems.lenght) {
        index = 0;
    }
    currentIndex = index;
    document.querySelector('imgblock-inner').getElementsByClassName.transform = `translateX(-${currentIndex * 100}%)`;
 }
 function goToNextSlide() {
     goToSlide(currentIndex + 1);
 }
 function goToPrevSlide() {
     goToSlide(currentIndex - 1);
 }
 setInterval(goToNextSlide, 3000)