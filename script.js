function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function typeEffect(element, text, delay) {
  let index = 0;
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.querySelector('.title');
  const subtitleElement = document.querySelector('.section__text__p2');

  // Start the typing effect after the slide-in animation
  setInterval(() => {
    titleElement.textContent = ''; // Clear title
    subtitleElement.textContent = ''; // Clear subtitle

    setTimeout(() => {
      typeEffect(titleElement, 'Shuvankar Dhara', 100); // Typing title
    }, 500); // Start after slide-in animation

    setTimeout(() => {
      typeEffect(subtitleElement, 'Python Developer', 100); // Typing subtitle
    }, 2000); // Start after title

    // After "Python Developer" is finished typing, 
    // clear and print "Student" after a delay
    setTimeout(() => {
      subtitleElement.textContent = ''; // Clear subtitle
      typeEffect(subtitleElement, 'Artificial Intelligence Student', 50); // Typing "Student"
    }, 4000); // Start after "Python Developer"
  }, 10000); // Repeat every 5 seconds
});
