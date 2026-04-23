import { useState, useEffect, useRef } from 'react';

/**
 * Counts from 0 to `end` over `duration` ms once the element enters the viewport.
 * Returns [count, ref] – attach `ref` to the element you want to observe.
 */
export function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic for a nicer feel
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
}
