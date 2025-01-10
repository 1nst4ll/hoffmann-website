import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export const useScrollTo = (options: ScrollOptions = {}) => {
  const { offset = 80, behavior = 'smooth' } = options;

  return useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior
      });
    }
  }, [offset, behavior]);
};