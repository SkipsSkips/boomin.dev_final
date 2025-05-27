// Main JavaScript File

// DOM Elements
const header = document.getElementById('main-header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');

// Scroll Event for Header
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  const spans = mobileMenuToggle.querySelectorAll('span');
  
  if (navLinks.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
    
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: targetPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Function to show form messages
function showFormMessage(message, type = 'success') {
  // Remove any existing message
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create message element
  const messageElement = document.createElement('div');
  messageElement.className = `form-message ${type === 'success' ? 'success' : 'error'}`;
  messageElement.textContent = message;
  
  // Style the message
  messageElement.style.padding = '1.2rem';
  messageElement.style.marginTop = '1.6rem';
  messageElement.style.borderRadius = 'var(--radius-sm)';
  
  if (type === 'success') {
    messageElement.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
    messageElement.style.borderLeft = '4px solid var(--color-success)';
  } else {
    messageElement.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
    messageElement.style.borderLeft = '4px solid var(--color-error)';
  }
  
  // Append to form
  contactForm.appendChild(messageElement);
  
  // Auto-remove message after 5 seconds
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // In a real application, you would send this data to your server
    console.log('Newsletter signup:', email);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    
    // Reset form
    this.reset();
  });
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
  // Apply initial header state
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
});