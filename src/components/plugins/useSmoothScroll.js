export function useSmoothScroll() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offset = -120 // Adjust the offset as needed
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return { scrollToSection }
}
