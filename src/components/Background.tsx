import { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points: Point[] = [];
  const maxDist = 100;
  const numPoints = 100;

  interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    angle: number;
    speed: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let time = 0;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createPoints = () => {
      points.length = 0;
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          angle: Math.random() * Math.PI * 2,
          speed: 0.2 + Math.random() * 0.3,
        });
      }
    };

    const drawLine = (point1: Point, point2: Point, distance: number) => {
      const opacity = 1 - (distance / maxDist);
      ctx.strokeStyle = `rgba(100, 255, 218, ${opacity * 0.5})`;
      ctx.lineWidth = opacity;
      ctx.beginPath();
      ctx.moveTo(point1.x, point1.y);
      ctx.lineTo(point2.x, point2.y);
      ctx.stroke();
    };

    const updatePoints = () => {
      time += 0.01;
      
      for (const point of points) {
        // Natural movement
        point.angle += (Math.random() - 0.5) * 0.05; // Random direction change
        const naturalX = Math.cos(point.angle) * point.speed;
        const naturalY = Math.sin(point.angle) * point.speed;
        
        // Perlin-like noise effect
        const noiseX = Math.sin(time + point.x * 0.01) * 0.1;
        const noiseY = Math.cos(time + point.y * 0.01) * 0.1;

        // Add mouse influence
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) * 0.0001;
          point.vx -= dx * force;
          point.vy -= dy * force;
        }

        // Combine all movements
        point.vx = point.vx * 0.9 + (naturalX + noiseX) * 0.1;
        point.vy = point.vy * 0.9 + (naturalY + noiseY) * 0.1;
        
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Add friction
        point.vx *= 0.99;
        point.vy *= 0.99;

        // Bounce off walls with damping
        if (point.x < 0) {
          point.x = 0;
          point.vx *= -0.7;
          point.angle = Math.PI - point.angle;
        }
        if (point.x > canvas.width) {
          point.x = canvas.width;
          point.vx *= -0.7;
          point.angle = Math.PI - point.angle;
        }
        if (point.y < 0) {
          point.y = 0;
          point.vy *= -0.7;
          point.angle = -point.angle;
        }
        if (point.y > canvas.height) {
          point.y = canvas.height;
          point.vy *= -0.7;
          point.angle = -point.angle;
        }

        // Keep points within bounds
        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 300
      );
      gradient.addColorStop(0, 'rgba(100, 255, 218, 0.1)');
      gradient.addColorStop(1, 'rgba(10, 25, 47, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDist) {
            drawLine(points[i], points[j], distance);
          }
        }
      }

      // Draw points with slight glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(100, 255, 218, 0.5)';
      
      for (const point of points) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 255, 218, 0.8)';
        ctx.fill();
      }
      
      ctx.shadowBlur = 0;

      updatePoints();
      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      createPoints();
    };

    // Initialize
    resizeCanvas();
    createPoints();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-primary">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: 'blur(1px)' }}
      />
    </div>
  );
};

export default Background;