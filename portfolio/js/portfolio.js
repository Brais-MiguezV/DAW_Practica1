// Get the element to animate
const $box = $(".oculta");
let screenSize = window.innerHeight;

// Check if the element is in the viewport
function isInViewport(element) {
  if (element.getBoundingClientRect().top < screenSize) {
    return true;
  } else {
    return false;
  }
}

// Function to handle the scroll event
function handleScroll() {
  for (let i = 0; i < $box.length; i++) {
    let element = $box[i];
    if (isInViewport(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  }
}

// Add the event listener
$(window).on("scroll", handleScroll);
