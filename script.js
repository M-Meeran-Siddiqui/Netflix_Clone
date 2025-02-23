const initSlider = () => {
  const imageList = document.querySelector('.card');
  const leftButton = document.querySelector('.left-slider-btn');
  const rightButton = document.querySelector('.right-slider-btn');

  // Function to check scroll position and hide/show buttons
  const updateButtons = () => {
      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      if (imageList.scrollLeft <= 0) {
          leftButton.style.visibility = 'hidden';  
      } else {
          leftButton.style.visibility = 'visible';  
      }

      if (Math.ceil(imageList.scrollLeft) >= maxScrollLeft) {  
          rightButton.style.visibility = 'hidden';  
      } else {
          rightButton.style.visibility = 'visible';  
      }
  };

  // Scroll event to track position
  imageList.addEventListener('scroll', updateButtons);

  // Slide images according to button clicks
  leftButton.addEventListener('click', () => {
      imageList.scrollBy({ left: -imageList.clientWidth, behavior: 'smooth' });
  });

  rightButton.addEventListener('click', () => {
      imageList.scrollBy({ left: imageList.clientWidth, behavior: 'smooth' });
  });

  // Initial check to set button visibility on load
  updateButtons();
};

window.addEventListener('load', initSlider);
