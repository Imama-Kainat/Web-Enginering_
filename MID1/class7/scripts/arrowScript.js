document.addEventListener("DOMContentLoaded", () => {
    let cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    let arrows = {
        up: createArrow("arrow-up"),
        down: createArrow("arrow-down"),
        left: createArrow("arrow-left"),
        right: createArrow("arrow-right")
    };

    let lastX = 0, lastY = 0;

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        let dx = e.clientX - lastX;
        let dy = e.clientY - lastY;

        Object.values(arrows).forEach(arrow => arrow.classList.remove("active"));

        if (Math.abs(dx) > Math.abs(dy)) {
           
            if (dx < 0) arrows.left.classList.add("active");
            if (dx > 0) arrows.right.classList.add("active");
        } else {
           
            if (dy < 0) arrows.up.classList.add("active");
            if (dy > 0) arrows.down.classList.add("active");
        }

        lastX = e.clientX;
        lastY = e.clientY;
    });

    function createArrow(className) {
        let arrow = document.createElement("div");
        arrow.classList.add("arrow", className);
        cursor.appendChild(arrow);
        return arrow;
    }
});
