
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const links = document.querySelectorAll(".transition-link");

    overlay.style.left = "-100%";

    if (sessionStorage.getItem("transitioning") === "true") {
        sessionStorage.removeItem("transitioning");

        setTimeout(() => {
            overlay.style.left = "-100%";
        }, 2500);
    }
    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetUrl = this.getAttribute("href");
            sessionStorage.setItem("transitioning", "true");

            overlay.style.left = "0"; 

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    const daftarBtn = document.querySelector('.daftar-btn');
    
    ctaButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    ctaButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
    daftarBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.cursor = 'pointer';
    });
    
    daftarBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

const carousel = document.querySelector(".carousel-container");

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
    isDown = false;
});

carousel.addEventListener("mouseup", () => {
    isDown = false;
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; 
    carousel.scrollLeft = scrollLeft - walk;
});




//navbar
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');

function moveSlide(index) {
    currentIndex = index;
    const newTransform = -index * 50 + '%';
    slider.style.transform = `translateX(${newTransform})`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

