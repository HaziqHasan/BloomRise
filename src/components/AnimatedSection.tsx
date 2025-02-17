import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation:
    | 'fadeInUp'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'scaleIn'
    | 'float'
    | 'pulse-slow'
    | 'rotate'
    | 'shimmer';
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation,
  delay = 0,
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`${className} animate-${animation} ${isVisible ? 'animate-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};