import { useEffect, useRef, useState } from 'react';
import { motion, useSpring as useFramerSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useFramerSpring(cursorX, springConfig);
  const springY = useFramerSpring(cursorY, springConfig);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let innerCursorX = 0;
    let innerCursorY = 0;
    
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update spring values for outer cursor
      cursorX.set(mouseX - 16);
      cursorY.set(mouseY - 16);
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    const updateCursor = () => {
      if (!cursor) return;
      
      // Smooth lerp for inner cursor
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      innerCursorX = lerp(innerCursorX, mouseX, 0.5);
      innerCursorY = lerp(innerCursorY, mouseY, 0.5);
      
      cursor.style.transform = `translate3d(${innerCursorX - 8}px, ${innerCursorY - 8}px, 0)`;
      requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationFrame = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-secondary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-secondary rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        style={{
          x: springX,
          y: springY,
          willChange: 'transform'
        }}
        transition={{
          scale: {
            type: "spring",
            ...springConfig
          }
        }}
      />
    </>
  );
};

export default CustomCursor;