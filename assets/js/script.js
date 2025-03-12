document.addEventListener("DOMContentLoaded", function () {
    // Elemen Sidebar & Toggle
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-btn");

    // Elemen Detail Marker
    const markerDetail = document.getElementById("markerDetail");

    // Elemen Marker 4 (untuk menampilkan detail marker)
    const marker4 = document.getElementById("marker4");

    // ======================
    // FUNGSI: UPDATE POSISI
    // ======================
    function updateMarkerDetailPosition() {
        if (window.innerWidth <= 768) {
            // Mobile: fullscreen menutupi sidebar
            markerDetail.style.position = "fixed";
            markerDetail.style.bottom = "0";
            markerDetail.style.left = "0";
            markerDetail.style.borderRadius = "20"
            markerDetail.style.zIndex = "9999";
        } else {
            // Desktop: menyesuaikan sidebar
            markerDetail.style.position = "absolute";
            markerDetail.style.top = "15%";      // Sesuaikan kebutuhan
            markerDetail.style.width = "30em";   // Sesuaikan kebutuhan
            markerDetail.style.height = "auto";
            markerDetail.style.borderRadius = "25px";
            markerDetail.style.zIndex = "1000";

            if (sidebar.classList.contains("minimized")) {
                markerDetail.style.left = "80px";
            } else {
                markerDetail.style.left = "270px";
            }
        }
    }

    // ====================================
    // EVENT: KLIK TOGGLE SIDEBAR
    // ====================================
    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("minimized");
        updateMarkerDetailPosition();
    });

    // ====================================
    // EVENT: KLIK MARKER 4 (SHOW/HIDE DETAIL)
    // ====================================
    marker4.addEventListener("click", function () {
        if (markerDetail.classList.contains("show")) {
            closeDetailMarker();
        } else {
            openDetailMarker();
        }
    });

    // ====================================
    // FUNGSI: BUKA / TUTUP DETAIL MARKER
    // ====================================
    function openDetailMarker() {
        markerDetail.style.display = "block";
        markerDetail.classList.remove("hide");
        markerDetail.classList.add("show");
    }

    function closeDetailMarker() {
        markerDetail.classList.remove("show");
        markerDetail.classList.add("hide");
        setTimeout(() => {
            markerDetail.style.display = "none";
        }, 300); // Sesuaikan durasi fadeOut di CSS
    }

    // ====================================
    // SWIPE DOWN UNTUK MENUTUP DETAIL MARKER (KHUSUS MOBILE)
    // ====================================
    let startY = 0;
    const SWIPE_THRESHOLD = 50; // Minimal jarak geser ke bawah (px)

    function handleTouchStart(e) {
        if (window.innerWidth <= 768 && markerDetail.classList.contains("show")) {
            startY = e.touches[0].clientY;
        }
    }

    function handleTouchEnd(e) {
        if (window.innerWidth <= 768 && markerDetail.classList.contains("show")) {
            const endY = e.changedTouches[0].clientY;
            const diff = endY - startY;
            // Jika jarak swipe ke bawah melebihi SWIPE_THRESHOLD => tutup
            if (diff > SWIPE_THRESHOLD) {
                closeDetailMarker();
            }
        }
    }

    // Tambahkan event listener swipe ke detail marker
    markerDetail.addEventListener("touchstart", handleTouchStart);
    markerDetail.addEventListener("touchend", handleTouchEnd);

    // ====================================
    // PANGGIL FUNGSI AWAL
    // ====================================
    updateMarkerDetailPosition();

    // Pastikan detail marker menyesuaikan posisi saat resize
    window.addEventListener("resize", updateMarkerDetailPosition);
});

document.addEventListener("DOMContentLoaded", function () {
    const mapWrapper = document.getElementById("mapWrapper");
    const mapContainer = document.querySelector(".map-container");

    let isDragging = false;
    let startX, startY, currentX = 0, currentY = 0;
    let maxX, maxY, minX, minY;

    function updateBounds() {
        // Atur skala berdasarkan ukuran layar
        const isMobile = window.innerWidth <= 768; 
        const scaleFactor = isMobile ? 1.5 : 1.1; // Skala lebih luas di mobile
        
        // Atur ukuran mapWrapper
        mapWrapper.style.width = `${window.innerWidth * scaleFactor}px`;
        mapWrapper.style.height = `${window.innerHeight * scaleFactor}px`;

        maxX = 0;
        maxY = 0;
        minX = mapContainer.clientWidth - mapWrapper.clientWidth;
        minY = mapContainer.clientHeight - mapWrapper.clientHeight;
    }

    function startDrag(x, y) {
        isDragging = true;
        startX = x - currentX;
        startY = y - currentY;
        mapContainer.style.cursor = "grabbing";
    }

    function moveMap(x, y) {
        if (!isDragging) return;
        let newX = x - startX;
        let newY = y - startY;

        // Batasi agar tidak keluar dari area peta
        newX = Math.min(maxX, Math.max(minX, newX));
        newY = Math.min(maxY, Math.max(minY, newY));

        currentX = newX;
        currentY = newY;

        mapWrapper.style.transform = `translate(${newX}px, ${newY}px)`;
    }

    function stopDrag() {
        isDragging = false;
        mapContainer.style.cursor = "grab";
    }

    // Event untuk Mouse
    mapWrapper.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
    document.addEventListener("mousemove", (e) => moveMap(e.clientX, e.clientY));
    document.addEventListener("mouseup", stopDrag);

    // Event untuk Touch (Mobile)
    mapWrapper.addEventListener("touchstart", (e) => {
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    });

    document.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        moveMap(touch.clientX, touch.clientY);
    });

    document.addEventListener("touchend", stopDrag);

    // Perbarui batas saat halaman dimuat & saat layar diubah ukurannya
    updateBounds();
    window.addEventListener("resize", updateBounds);
});



