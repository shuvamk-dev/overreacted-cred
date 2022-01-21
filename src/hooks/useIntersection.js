import { useState, useEffect } from "react";

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    element && observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return isVisible;
};

export default useIntersection;
