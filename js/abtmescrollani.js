// Event listener for scroll
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// Selecting elements
const elevator = document.querySelector('.elevator');
const elevatorL = document.querySelector('.elevatorL');
const elevatorR = document.querySelector('.elevatorR');

// Create the Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      elevator.classList.add('elevator-transition');
      elevatorL.classList.add('elevatorL-transition');
      elevatorR.classList.add('elevatorR-transition');
    } else {
      elevator.classList.remove('elevator-transition');
      elevatorL.classList.remove('elevatorL-transition');
      elevatorR.classList.remove('elevatorR-transition');
    }
  });
}, {
  // Intersection Observer options (if needed)
});

// Observe multiple elements
observer.observe(document.querySelector('.elevator'));
observer.observe(document.querySelector('.elevatorL'));
observer.observe(document.querySelector('.elevatorR'));
