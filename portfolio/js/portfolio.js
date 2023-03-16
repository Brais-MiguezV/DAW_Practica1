// Get the element to animate
const $box = $('.huella');
let screenSize = window.innerHeight;

// Check if the element is in the viewport
function isInViewport(element) {

        if (element.getBoundingClientRect().top < screenSize) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
//   const rect = element.getBoundingClientRect;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
}

// Function to handle the scroll event
function handleScroll() {

    for(let i = 0; i< $box.length; i++){
        let element = $box[i];
        if (isInViewport(element)) {
            element.addClass('visible');
    
          }
        
    }
}

// Add the event listener
$(window).on('scroll', handleScroll);