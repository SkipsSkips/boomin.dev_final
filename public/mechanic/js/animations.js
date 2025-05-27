// Animations JavaScript

// Animation on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animation tracking
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  // Check if there are elements to animate
  if (animatedElements.length === 0) return;
  
  // Set initial state for all elements - hide them
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    
    const animationType = element.getAttribute('data-aos');
    
    if (animationType === 'fade-up') {
      element.style.transform = 'translateY(50px)';
    } else if (animationType === 'fade-down') {
      element.style.transform = 'translateY(-50px)';
    } else if (animationType === 'fade-left') {
      element.style.transform = 'translateX(50px)';
    } else if (animationType === 'fade-right') {
      element.style.transform = 'translateX(-50px)';
    } else if (animationType === 'zoom-in') {
      element.style.transform = 'scale(0.9)';
    }
    
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
  
  // Function to check if an element is in viewport
  const isInViewport = element => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  };
  
  // Function to handle scroll animations
  const handleScrollAnimations = () => {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        // Get animation delay if any
        const delay = element.getAttribute('data-aos-delay') || 0;
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'none';
        }, delay);
      }
    });
  };
  
  // Apply animations on load and scroll
  handleScrollAnimations();
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Apply animations on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleScrollAnimations, 100);
  });
});

// Service Card Hover Animation
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const icon = card.querySelector('.service-icon');
    if (icon) {
      icon.style.transform = 'scale(1.1) rotate(5deg)';
      icon.style.transition = 'transform 0.3s ease';
    }
  });
  
  card.addEventListener('mouseleave', () => {
    const icon = card.querySelector('.service-icon');
    if (icon) {
      icon.style.transform = 'scale(1) rotate(0)';
    }
  });
});

// Feature Hover Animation
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
  feature.addEventListener('mouseenter', () => {
    const icon = feature.querySelector('.feature-icon');
    if (icon) {
      icon.style.backgroundColor = 'var(--color-accent)';
      icon.style.transform = 'scale(1.1)';
      icon.style.transition = 'all 0.3s ease';
    }
  });
  
  feature.addEventListener('mouseleave', () => {
    const icon = feature.querySelector('.feature-icon');
    if (icon) {
      icon.style.backgroundColor = 'var(--color-primary-light)';
      icon.style.transform = 'scale(1)';
    }
  });
});

// Contact Icon Animation
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const icon = item.querySelector('.contact-icon');
    if (icon) {
      icon.style.backgroundColor = 'var(--color-accent)';
      icon.style.transform = 'scale(1.1) rotate(5deg)';
      icon.style.transition = 'all 0.3s ease';
    }
  });
  
  item.addEventListener('mouseleave', () => {
    const icon = item.querySelector('.contact-icon');
    if (icon) {
      icon.style.backgroundColor = 'var(--color-primary-light)';
      icon.style.transform = 'scale(1) rotate(0)';
    }
  });
});

// Button Hover Animation
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-3px)';
    button.style.boxShadow = 'var(--shadow-md)';
  });
  
  button.addEventListener('mouseleave', () => {
    if (!button.classList.contains('btn-text')) {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'none';
    }
  });
});

// Social Icon Animation
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateY(-5px) rotate(5deg)';
  });
  
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateY(0) rotate(0)';
  });
});

// Hero Animation
const heroSection = document.getElementById('hero');
if (heroSection) {
  // Create parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    heroSection.style.backgroundPosition = `center ${50 + (scrollPosition * 0.05)}%`;
  });
  
  // Animate hero content on page load
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add('fade-in');
      
      // Animate each child element with a delay
      const children = heroContent.children;
      for (let i = 0; i < children.length; i++) {
        setTimeout(() => {
          children[i].classList.add('fade-up');
        }, 200 * i);
      }
    }, 300);
  }
}