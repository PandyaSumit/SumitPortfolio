/**
 * Smoothly scrolls to the specified element with adjustments for header height
 * @param {string} id - The ID of the element to scroll to (without # prefix)
 */
export const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  
  if (element) {
    // Get header height (assuming 80px, adjust as needed)
    const headerHeight = 80;
    
    // Calculate the element's position relative to the viewport
    const elementPosition = element.getBoundingClientRect().top;
    
    // Calculate the absolute position by adding current scroll position
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    // Smooth scroll to element
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};