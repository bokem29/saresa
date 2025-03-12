// Simple script to handle button hover effects
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
// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.card');
//     let currentIndex = 0;
    
//     // Replace placeholder icons with actual Unicode icons
//     document.querySelector('.header-bar').innerHTML = document.querySelector('.header-bar').innerHTML
//         .replace('✓', '🌱')
//         .replace('★', '💡')
//         .replace('⊕', '🎁')
//         .replace('➕', '👥');
    
//     // Rotate cards function
//     function rotateCards() {
//         currentIndex = (currentIndex + 1) % 5;
        
//         const positions = [
//             { transform: 'translateX(-450px) rotate(-15deg)', zIndex: 1 },
//             { transform: 'translateX(-230px) rotate(-5deg)', zIndex: 2 },
//             { transform: 'translateX(0) rotate(0deg)', zIndex: 5 },
//             { transform: 'translateX(230px) rotate(5deg)', zIndex: 2 },
//             { transform: 'translateX(450px) rotate(15deg)', zIndex: 1 }
//         ];
        
//         cards.forEach((card, index) => {
//             const newPosition = (index - currentIndex + 5) % 5;
//             card.style.transform = positions[newPosition].transform;
//             card.style.zIndex = positions[newPosition].zIndex;
//         });
//     }
    
//     // Start automatic rotation
//     setInterval(rotateCards, 3000);
    
//     // Add click handlers to move cards on click
//     cards.forEach((card, index) => {
//         card.addEventListener('click', () => {
//             const diff = index - (currentIndex + 2) % 5;
//             if (diff !== 0) {
//                 currentIndex = (currentIndex + diff + 5) % 5;
//                 rotateCards();
//             }
//         });
//     });
// });
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
    const walk = (x - startX) * 2; // scroll speed
    carousel.scrollLeft = scrollLeft - walk;
});




//nabvbar
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}


//mobile slogan body
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

//mitra
// let index = 0;
// const slidesMitra = document.querySelector(".slider-mitra");
// const totalSlides = slidesMitra.children.length;
// const slideWidth = slidesMitra.children[0].offsetWidth; // Ambil ukuran gambar

// function moveSlide(direction) {
//     index += direction;

//     if (index < 0) {
//         index = totalSlides - 1; // Jika di awal, lompat ke gambar terakhir
//     } else if (index >= totalSlides) {
//         index = 0; // Jika di akhir, kembali ke gambar pertama
//     }

//     slidesMitra.style.transform = `translateX(${-index * slideWidth}px)`;
// }
