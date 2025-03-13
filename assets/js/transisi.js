document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".transition-link");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = link.href;
            }, 500); // Harus sesuai dengan durasi animasi CSS
        });
    });
});
