export const smoothScrollTo = (event, targetId) => {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    targetElement.focus();
  }
};
