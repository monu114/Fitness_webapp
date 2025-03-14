document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power1.out" });
    });

    document.querySelectorAll('.cta, nav a').forEach(el => {
        el.addEventListener('mouseenter', () => gsap.to(cursor, { width: 40, height: 40, backgroundColor: "#ff9900", duration: 0.2 }));
        el.addEventListener('mouseleave', () => gsap.to(cursor, { width: 20, height: 20, backgroundColor: "#ffcc00", duration: 0.2 }));
    });
});
