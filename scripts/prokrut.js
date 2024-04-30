(function () {
    'use strict';
    var slides = document.querySelectorAll('.skrin'),
        arrows = document.querySelectorAll('.lnr'),
        counter = document.querySelector('.count'),
        carouselCount = 0,
        scrollInterval,
        interval = 5000;

    arrows[0].addEventListener('click', function (e) {
        e = e || window.event;
        e.preventDefault();
        carouselCount -= 100;
        slider();
        if (e.type !== 'autoClick') {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(autoScroll, interval);
        }
    });
    arrows[1].addEventListener('click', sliderEvent);
    arrows[1].addEventListener('autoClick', sliderEvent);

    function sliderEvent(e) {
        e = e || window.event;
        e.preventDefault();
        carouselCount += 100;
        slider();
        if (e.type !== "autoClick") {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(autoScroll, interval);
        }
    }

    function slider() {
        switch (carouselCount) {
            case -100:
                carouselCount = 400;
                break;
            case 500:
                carouselCount = 0;
                break;
            default:
                break;
        }
        console.log(carouselCount);
        for (var i = 0; i < slides.length; i += 1) {
            counter.innerHTML = (carouselCount/100) + 1;
            slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
        }
    }

    // create new Event to dispatch click for auto scroll
    var autoClick = new Event('autoClick');
    function autoScroll() {
        arrows[1].dispatchEvent(autoClick);
    }

    // set timing of dispatch click events
    scrollInterval = setInterval(autoScroll, interval);

})();