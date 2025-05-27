// Testimonials JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.prev-testimonial');
  const nextBtn = document.querySelector('.next-testimonial');
  const dots = document.querySelectorAll('.testimonial-dot');
  
  // Skip if testimonials are not present on the page
  if (!testimonialSlides.length || !prevBtn || !nextBtn || !dots.length) return;
  
  let currentSlide = 0;
  let isAnimating = false;
  let autoplayInterval;
  
  // Initialize dots
  updateDots();
  
  // Start autoplay
  startAutoplay();
  
  // Next slide
  function nextSlide() {
    if (isAnimating) return;
    
    isAnimating = true;
    
    // Fade out current slide
    testimonialSlides[currentSlide].style.opacity = '0';
    
    setTimeout(() => {
      // Remove active class from current slide
      testimonialSlides[currentSlide].classList.remove('active');
      
      // Update current slide index
      currentSlide = (currentSlide + 1) % testimonialSlides.length;
      
      // Add active class to next slide
      testimonialSlides[currentSlide].classList.add('active');
      
      // Fade in next slide
      setTimeout(() => {
        testimonialSlides[currentSlide].style.opacity = '1';
        isAnimating = false;
      }, 50);
      
      // Update dots
      updateDots();
    }, 300);
  }
  
  // Previous slide
  function prevSlide() {
    if (isAnimating) return;
    
    isAnimating = true;
    
    // Fade out current slide
    testimonialSlides[currentSlide].style.opacity = '0';
    
    setTimeout(() => {
      // Remove active class from current slide
      testimonialSlides[currentSlide].classList.remove('active');
      
      // Update current slide index
      currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
      
      // Add active class to previous slide
      testimonialSlides[currentSlide].classList.add('active');
      
      // Fade in previous slide
      setTimeout(() => {
        testimonialSlides[currentSlide].style.opacity = '1';
        isAnimating = false;
      }, 50);
      
      // Update dots
      updateDots();
    }, 300);
  }
  
  // Go to specific slide
  function goToSlide(index) {
    if (isAnimating || index === currentSlide) return;
    
    isAnimating = true;
    
    // Fade out current slide
    testimonialSlides[currentSlide].style.opacity = '0';
    
    setTimeout(() => {
      // Remove active class from current slide
      testimonialSlides[currentSlide].classList.remove('active');
      
      // Update current slide index
      currentSlide = index;
      
      // Add active class to target slide
      testimonialSlides[currentSlide].classList.add('active');
      
      // Fade in target slide
      setTimeout(() => {
        testimonialSlides[currentSlide].style.opacity = '1';
        isAnimating = false;
      }, 50);
      
      // Update dots
      updateDots();
    }, 300);
  }
  
  // Update dots
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // Start autoplay
  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(nextSlide, 5000);
  }
  
  // Stop autoplay
  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  }
  
  // Event listeners
  nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoplay(); // Reset autoplay timer
  });
  
  prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoplay(); // Reset autoplay timer
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      startAutoplay(); // Reset autoplay timer
    });
  });
  
  // Pause autoplay when hovering over testimonial slider
  const testimonialSlider = document.querySelector('.testimonial-slider');
  
  if (testimonialSlider) {
    testimonialSlider.addEventListener('mouseenter', stopAutoplay);
    testimonialSlider.addEventListener('mouseleave', startAutoplay);
  }
  
  // Add swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  const testimonialContainer = document.querySelector('.testimonial-slides');
  
  if (testimonialContainer) {
    testimonialContainer.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    testimonialContainer.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
  
  function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance
    
    if (touchEndX - touchStartX > swipeThreshold) {
      // Swiped right
      prevSlide();
    } else if (touchStartX - touchEndX > swipeThreshold) {
      // Swiped left
      nextSlide();
    }
    
    startAutoplay(); // Reset autoplay timer
  }
  
  // Apply initial styles
  testimonialSlides.forEach((slide, index) => {
    if (index !== currentSlide) {
      slide.style.opacity = '0';
    } else {
      slide.style.opacity = '1';
    }
  });
});