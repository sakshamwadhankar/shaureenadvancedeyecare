import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = "", direction = "up", delay = 0, as: Component = "div" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let directionClass = "reveal-up";
  if (direction === "down") directionClass = "reveal-down";
  if (direction === "left") directionClass = "reveal-left";
  if (direction === "right") directionClass = "reveal-right";

  return (
    <Component 
      ref={ref} 
      className={`reveal ${directionClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
