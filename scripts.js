// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Código para interatividade do carrossel
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    showCarouselItem(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
    }, 3000);
});
