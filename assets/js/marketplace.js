document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;


    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.dataset.slide);
            updateCarousel();
        });
    });


    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }, 5000);

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 350}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
});
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

document.querySelectorAll('.item-menu').forEach(item => {
    item.addEventListener('click', function() {
        let targetUrl = this.getAttribute('data-url');
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});
