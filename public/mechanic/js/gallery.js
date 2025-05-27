// Gallery JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.querySelector('.gallery-grid');
  const filterButtons = document.querySelectorAll('.gallery-controls button');
  
  // Skip if gallery is not present on the page
  if (!galleryGrid || !filterButtons.length) return;
  
  // Gallery filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter value
      const filterValue = button.getAttribute('data-filter');
      
      // Filter gallery items
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          // Show the item with animation
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          // Hide the item with animation
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Gallery item hover effects
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    // Create a lightbox effect when clicking on gallery items
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h4').textContent;
      const description = item.querySelector('p').textContent;
      
      createLightbox(img.src, title, description);
    });
    
    // Add hover animation
    item.addEventListener('mouseenter', () => {
      const overlay = item.querySelector('.gallery-overlay');
      if (overlay) {
        overlay.style.transform = 'translateY(0)';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      const overlay = item.querySelector('.gallery-overlay');
      if (overlay) {
        overlay.style.transform = 'translateY(100%)';
      }
    });
  });
  
  // Function to create a lightbox
  function createLightbox(imgSrc, title, description) {
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.flexDirection = 'column';
    lightbox.style.zIndex = '2000';
    lightbox.style.opacity = '0';
    lightbox.style.transition = 'opacity 0.3s ease';
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '2rem';
    closeButton.style.right = '2rem';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '3.6rem';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '2001';
    closeButton.style.width = '5rem';
    closeButton.style.height = '5rem';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    closeButton.style.borderRadius = '50%';
    closeButton.style.transition = 'background-color 0.3s ease';
    
    closeButton.addEventListener('mouseenter', () => {
      closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    
    closeButton.addEventListener('mouseleave', () => {
      closeButton.style.backgroundColor = 'transparent';
    });
    
    // Create image container
    const imgContainer = document.createElement('div');
    imgContainer.style.maxWidth = '80%';
    imgContainer.style.maxHeight = '70vh';
    imgContainer.style.overflow = 'hidden';
    imgContainer.style.borderRadius = 'var(--radius-md)';
    imgContainer.style.boxShadow = 'var(--shadow-lg)';
    
    // Create image
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.maxHeight = '70vh';
    img.style.objectFit = 'contain';
    
    // Create info container
    const infoContainer = document.createElement('div');
    infoContainer.style.color = 'white';
    infoContainer.style.textAlign = 'center';
    infoContainer.style.maxWidth = '60%';
    infoContainer.style.marginTop = '2.4rem';
    
    // Create title
    const titleEl = document.createElement('h3');
    titleEl.textContent = title;
    titleEl.style.marginBottom = '0.8rem';
    titleEl.style.color = 'white';
    
    // Create description
    const descEl = document.createElement('p');
    descEl.textContent = description;
    descEl.style.color = 'var(--color-gray-300)';
    
    // Append elements
    infoContainer.appendChild(titleEl);
    infoContainer.appendChild(descEl);
    imgContainer.appendChild(img);
    lightbox.appendChild(closeButton);
    lightbox.appendChild(imgContainer);
    lightbox.appendChild(infoContainer);
    document.body.appendChild(lightbox);
    
    // Add event listener to close the lightbox
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    // Block scrolling
    document.body.style.overflow = 'hidden';
    
    // Fade in the lightbox
    setTimeout(() => {
      lightbox.style.opacity = '1';
    }, 10);
    
    function closeLightbox() {
      lightbox.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(lightbox);
        document.body.style.overflow = '';
      }, 300);
    }
  }
});