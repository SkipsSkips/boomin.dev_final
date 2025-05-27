// Contact Form JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  // Phone number formatting
  const phoneInput = document.getElementById('phone');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
      
      // Format the phone number as (XXX) XXX-XXXX
      if (value.length > 0) {
        if (value.length <= 3) {
          value = `(${value}`;
        } else if (value.length <= 6) {
          value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
        } else {
          value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}`;
        }
      }
      
      e.target.value = value;
    });
  }
  
  // Form validation
  contactForm.addEventListener('submit', function(e) {
    let isValid = true;
    let firstInvalidField = null;
    
    // Validate name
    const nameInput = document.getElementById('name');
    if (!nameInput.value.trim()) {
      markInvalid(nameInput, 'Please enter your name');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = nameInput;
    } else {
      markValid(nameInput);
    }
    
    // Validate email
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      markInvalid(emailInput, 'Please enter a valid email address');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = emailInput;
    } else {
      markValid(emailInput);
    }
    
    // Validate phone
    const phoneInput = document.getElementById('phone');
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.trim())) {
      markInvalid(phoneInput, 'Please enter a valid phone number');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = phoneInput;
    } else {
      markValid(phoneInput);
    }
    
    // Validate service
    const serviceInput = document.getElementById('service');
    if (!serviceInput.value || serviceInput.value === '') {
      markInvalid(serviceInput, 'Please select a service');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = serviceInput;
    } else {
      markValid(serviceInput);
    }
    
    // If form is invalid, prevent submission and focus first invalid field
    if (!isValid) {
      e.preventDefault();
      if (firstInvalidField) firstInvalidField.focus();
      return false;
    }
    
    // Show submission feedback
    showFormMessage('Thank you! Your appointment request has been submitted. We will contact you shortly.', 'success');
    contactForm.reset();
    e.preventDefault(); // Prevent actual form submission for demo
  });
  
  // Mark field as invalid with error message
  function markInvalid(field, message) {
    field.classList.add('invalid');
    field.classList.remove('valid');
    field.style.borderColor = 'var(--color-error)';
    
    // Create or update error message
    let errorMessage = field.parentNode.querySelector('.error-message');
    
    if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.style.color = 'var(--color-error)';
      errorMessage.style.fontSize = '1.2rem';
      errorMessage.style.marginTop = '0.4rem';
      field.parentNode.appendChild(errorMessage);
    }
    
    errorMessage.textContent = message;
  }
  
  // Mark field as valid
  function markValid(field) {
    field.classList.remove('invalid');
    field.classList.add('valid');
    field.style.borderColor = 'var(--color-success)';
    
    // Remove error message if exists
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
      field.parentNode.removeChild(errorMessage);
    }
  }
  
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
      messageElement.style.color = 'var(--color-success)';
    } else {
      messageElement.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
      messageElement.style.borderLeft = '4px solid var(--color-error)';
      messageElement.style.color = 'var(--color-error)';
    }
    
    // Append to form
    contactForm.appendChild(messageElement);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 5000);
  }
  
  // Real-time validation as user types
  const formInputs = contactForm.querySelectorAll('input, select, textarea');
  
  formInputs.forEach(input => {
    input.addEventListener('blur', function() {
      // Skip message field as it's optional
      if (this.id === 'message') return;
      
      if (!this.value.trim()) {
        markInvalid(this, `Please enter your ${this.previousElementSibling.textContent.toLowerCase()}`);
      } else if (this.id === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.value.trim())) {
          markInvalid(this, 'Please enter a valid email address');
        } else {
          markValid(this);
        }
      } else if (this.id === 'phone') {
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        if (!phoneRegex.test(this.value.trim())) {
          markInvalid(this, 'Please enter a valid phone number');
        } else {
          markValid(this);
        }
      } else {
        markValid(this);
      }
    });
  });
});