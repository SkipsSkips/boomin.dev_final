// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to background
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX * -0.005);
    const moveY = (e.clientY * -0.005);
    document.querySelector('.background-animation').style.transform = `translate(${moveX}%, ${moveY}%)`;
});