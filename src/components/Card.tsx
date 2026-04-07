import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

export interface CardProps {
  title?: string;
  description?: string;
  label?: string;
  image?: string;
  route?: string;
  glowColor?: string;
  enableLevitation?: boolean;
  enableMagnetism?: boolean;
  enableParticles?: boolean;
  particleCount?: number;
  clickEffect?: boolean;
  className?: string;
}

const DEFAULT_GLOW_COLOR = '132, 0, 255';
const DEFAULT_PARTICLE_COUNT = 12;

const createParticleElement = (x: number, y: number, color: string): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'card-particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  label,
  image,
  route,
  glowColor = DEFAULT_GLOW_COLOR,
  enableLevitation = true,
  enableMagnetism = false,
  enableParticles = true,
  particleCount = DEFAULT_PARTICLE_COUNT,
  clickEffect = true,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Particle animation
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => particle.parentNode?.removeChild(particle),
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);
      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      element.style.setProperty('--glow-intensity', '1');
      
      if (enableParticles) animateParticles();
      
      // Levitation Start: Hebt die Karte um 10px an
      if (enableLevitation) {
        gsap.to(element, { y: -10, duration: 0.4, ease: 'power2.out' });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      element.style.setProperty('--glow-intensity', '0');
      
      if (enableParticles) clearAllParticles();
      
      // Zurücksetzen von Levitation und Magnetismus auf die Ursprungsposition
      gsap.to(element, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update Glow Position
      element.style.setProperty('--glow-x', `${x}px`);
      element.style.setProperty('--glow-y', `${y}px`);

      if (!enableMagnetism) return;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Magnetismus-Berechnung
      const magnetX = (x - centerX) * 0.05;
      const magnetY = (y - centerY) * 0.05;
      
      // Wenn Levitation aktiv ist, kombinieren wir den Magnetismus mit dem Schwebe-Offset (-10)
      const baseLevitation = enableLevitation ? -10 : 0;

      gsap.to(element, { 
        x: magnetX, 
        y: magnetY + baseLevitation, 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    };

    const handleClick = (e: MouseEvent) => {
      if (route) navigate(route);
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDistance = Math.max(
        Math.hypot(x, y), Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;
      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, enableLevitation, enableMagnetism, enableParticles, clickEffect, glowColor, route, navigate]);

  const cardStyle = {
  backgroundImage: image 
    ? `linear-gradient(to bottom, rgba(6, 0, 16, 0.2), rgba(6, 0, 16, 0.8)), url(${image})` 
    : undefined,
  backgroundColor: '#060010',
  '--glow-color-rgb': glowColor,
} as React.CSSProperties;

  return (
    <>
      <style>
        {`
          .project-card {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 250px;
          }
          
          .project-card::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(
              var(--glow-radius) circle at var(--glow-x) var(--glow-y),
              rgba(var(--glow-color-rgb), calc(var(--glow-intensity) * 0.8)) 0%,
              rgba(var(--glow-color-rgb), calc(var(--glow-intensity) * 0.3)) 40%,
              transparent 70%
            );
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          /* Etwas weicherer und tieferer Schatten für den perfekten Schwebe-Look */
          .project-card:hover {
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 40px rgba(var(--glow-color-rgb), 0.15);
          }
          
          .card-particle::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: rgba(var(--glow-color-rgb), 0.2);
            border-radius: 50%;
            z-index: -1;
          }
        `}
      </style>

      <div
        ref={cardRef}
        className={`project-card relative flex flex-col justify-between min-h-75 w-full p-6 rounded-[20px] border border-[#392e4e] text-white overflow-hidden cursor-pointer bg-cover bg-center select-none ${className}`}
        style={cardStyle}
      >
        <div className="relative z-10">
          {label && <span className="text-sm font-medium tracking-wide opacity-80">{label}</span>}
        </div>
        
        <div className="relative z-10 mt-auto pt-8">
          <h3 className="text-xl font-medium mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm leading-relaxed opacity-70 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;