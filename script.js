document.querySelectorAll('.vitrine').forEach(vitrine => {
  vitrine.addEventListener('mousemove', (e) => {
    const rect = vitrine.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    vitrine.style.transform = `
      perspective(1000px)
      rotateX(${angleX}deg)
      rotateY(${angleY}deg)
      scale(1.05)
    `;
  });
  
  vitrine.addEventListener('mouseleave', () => {
    vitrine.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

// Add smooth scrolling animation
window.addEventListener('scroll', () => {
  const vitrines = document.querySelectorAll('.vitrine');
  vitrines.forEach(vitrine => {
    const rect = vitrine.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;
    
    if (isVisible) {
      vitrine.style.opacity = '1';
      vitrine.style.transform = 'translateY(0)';
    }
  });
});