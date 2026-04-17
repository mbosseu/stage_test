document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            navbar.style.padding = '1rem 5%';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.5rem 5%';
        }
    });

    // Parallax effect on hero mouse move
    const hero = document.querySelector('.hero');
    const tapes = document.querySelectorAll('.caution-tape');
    const the911 = document.querySelector('.hero-title');

    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        tapes.forEach((tape, index) => {
            const factor = index === 0 ? 1 : -1;
            tape.style.transform = `translate(${x * factor}px, ${y * factor}px) rotate(${tape.classList.contains('tape-1') ? '-10deg' : '5deg'})`;
        });
        
        the911.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    });

    hero.addEventListener('mouseleave', () => {
        tapes.forEach(tape => {
            tape.style.transform = `rotate(${tape.classList.contains('tape-1') ? '-10deg' : '5deg'})`;
        });
        the911.style.transform = `translate(0, 0)`;
    });
});
