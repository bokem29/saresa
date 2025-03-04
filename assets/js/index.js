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