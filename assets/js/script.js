document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-btn");
    const markerDetail = document.getElementById("markerDetail");
    const marker4 = document.getElementById("marker4");

    function updateMarkerDetailPosition() {
        if (window.innerWidth <= 768) {
            markerDetail.style.position = "fixed";
            markerDetail.style.bottom = "0";
            markerDetail.style.left = "0";
            markerDetail.style.borderRadius = "20"
            markerDetail.style.zIndex = "9999";
        } else {
            markerDetail.style.position = "absolute";
            markerDetail.style.top = "15%";    
            markerDetail.style.width = "30em";   
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
    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("minimized");
        updateMarkerDetailPosition();
    });

    marker4.addEventListener("click", function () {
        if (markerDetail.classList.contains("show")) {
            closeDetailMarker();
        } else {
            openDetailMarker();
        }
    });

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
        }, 300);
    }

    let startY = 0;
    const SWIPE_THRESHOLD = 50; 

    function handleTouchStart(e) {
        if (window.innerWidth <= 768 && markerDetail.classList.contains("show")) {
            startY = e.touches[0].clientY;
        }
    }

    function handleTouchEnd(e) {
        if (window.innerWidth <= 768 && markerDetail.classList.contains("show")) {
            const endY = e.changedTouches[0].clientY;
            const diff = endY - startY;
            if (diff > SWIPE_THRESHOLD) {
                closeDetailMarker();
            }
        }
    }

    markerDetail.addEventListener("touchstart", handleTouchStart);
    markerDetail.addEventListener("touchend", handleTouchEnd);
    updateMarkerDetailPosition();
    window.addEventListener("resize", updateMarkerDetailPosition);
});

document.addEventListener("DOMContentLoaded", function () {
    const mapWrapper = document.getElementById("mapWrapper");
    const mapContainer = document.querySelector(".map-container");

    let isDragging = false;
    let startX, startY, currentX = 0, currentY = 0;
    let maxX, maxY, minX, minY;

    function updateBounds() {
        const isMobile = window.innerWidth <= 768; 
        const scaleFactor = isMobile ? 1.5 : 1.1;
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
    mapWrapper.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
    document.addEventListener("mousemove", (e) => moveMap(e.clientX, e.clientY));
    document.addEventListener("mouseup", stopDrag);
    mapWrapper.addEventListener("touchstart", (e) => {
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    });

    document.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        moveMap(touch.clientX, touch.clientY);
    });

    document.addEventListener("touchend", stopDrag);
    updateBounds();
    window.addEventListener("resize", updateBounds);
});



