const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    ctaButton.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
    setTimeout(() => {
        ctaButton.style.transform = 'translateZ(0)';
    }, 200);
});