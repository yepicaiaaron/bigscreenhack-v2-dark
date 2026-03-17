document.addEventListener('DOMContentLoaded', () => {
    const monolith = document.getElementById('monolith');
    const tiles = document.querySelectorAll('.video-tile');

    // Simple, performant mouse-move parallax for the desktop
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

        // Monolith tilt
        monolith.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

        // Video Tiles subtle float
        tiles.forEach((tile, i) => {
            const speed = (i + 1) * 2;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            tile.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${(i+1) * -100}px)`;
        });
    });

    // Scroll events for fading out the monolith into the content
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Push the hero monolith upwards slightly and blur out on scroll
        const heroOpacity = Math.max(1 - scrollY / 600, 0);
        monolith.style.opacity = heroOpacity;
        
        const translateY = scrollY * 0.5;
        // Combine the existing mouse transform logically
        // This is a basic blend; normally you'd use GSAP for heavy timeline scrolling
        monolith.style.marginTop = `${translateY}px`;
    });
});
