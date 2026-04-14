import { useEffect, useRef } from 'react';

const ProcessFlow3D = ({ activeStep = 0 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Point class
    class Point3D {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }

      rotateX(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const y = this.y * cos - this.z * sin;
        const z = this.y * sin + this.z * cos;
        this.y = y;
        this.z = z;
      }

      rotateY(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = this.x * cos + this.z * sin;
        const z = -this.x * sin + this.z * cos;
        this.x = x;
        this.z = z;
      }

      rotateZ(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = this.x * cos - this.y * sin;
        const y = this.x * sin + this.y * cos;
        this.x = x;
        this.y = y;
      }

      project(scale, offsetX, offsetY, perspective = 800) {
        const scale2d = perspective / (this.z + perspective);
        return {
          x: this.x * scale2d * scale + offsetX,
          y: this.y * scale2d * scale + offsetY,
          z: this.z,
          scale: scale2d
        };
      }
    }

    // Create 3D cylinder for each step
    const createCylinder = (radius = 1, height = 1.5, segments = 16) => {
      const points = [];
      const h = height / 2;

      // Top circle
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        points.push(new Point3D(x, h, z));
      }

      // Bottom circle
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        points.push(new Point3D(x, -h, z));
      }

      return points;
    };

    // Process steps data
    const steps = [
      { label: 'Idea', number: 1, color: '#bcd3f8ff' },
      { label: 'Analysis', number: 2, color: '#0891b2' },
      { label: 'Design', number: 3, color: '#0891b2' },
      { label: 'Development', number: 4, color: '#14b8a6' },
      { label: 'Testing', number: 5, color: '#fbbf24' },
      { label: 'Deployment', number: 6, color: '#f97316' },
      { label: 'Maintenance', number: 7, color: '#f97316' }
    ];

    // Create cylinders for each step
    const cylinders = steps.map(() => createCylinder(0.8, 1.8, 12));

    const animate = () => {
      time += 0.008;

      // Clear canvas
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(249, 250, 251, 0.95)');
      gradient.addColorStop(1, 'rgba(243, 244, 246, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connecting ribbon
      ctx.strokeStyle = 'rgba(255, 107, 53, 0.2)';
      ctx.lineWidth = 3;
      ctx.setLineDash([]);
      ctx.beginPath();
      
      for (let i = 0; i < steps.length; i++) {
        const x = 80 + i * 120;
        const y = canvas.height / 2 + Math.sin(time * 0.5 + i * 0.3) * 15;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Draw each step cylinder
      steps.forEach((step, stepIndex) => {
        const isActive = stepIndex === activeStep;
        const baseX = 80 + stepIndex * 120;
        const baseY = canvas.height / 2;

        // Rotation angles
        const rotX = time * 0.4 + (isActive ? 0.2 : 0);
        const rotY = time * 0.6 + stepIndex * 0.15;
        const rotZ = time * 0.2;

        // Rotate cylinder
        const rotatedCylinder = cylinders[stepIndex].map(p => {
          const point = new Point3D(p.x, p.y, p.z);
          point.rotateX(rotX);
          point.rotateY(rotY);
          point.rotateZ(rotZ);
          return point;
        });

        // Project points
        const projectedPoints = rotatedCylinder.map(p =>
          p.project(isActive ? 85 : 70, baseX, baseY, 600)
        );

        // Sort by depth
        const sortedIndices = Array.from({ length: projectedPoints.length }, (_, i) => i)
          .sort((a, b) => projectedPoints[a].z - projectedPoints[b].z);

        // Draw cylinder edges
        const segments = 12;
        for (let i = 0; i < segments - 1; i++) {
          const topStart = i;
          const topEnd = i + 1;
          const bottomStart = segments + i;
          const bottomEnd = segments + i + 1;

          const p1 = projectedPoints[topStart];
          const p2 = projectedPoints[topEnd];
          const p3 = projectedPoints[bottomStart];
          const p4 = projectedPoints[bottomEnd];

          // Top edge
          ctx.strokeStyle = step.color + (isActive ? 'dd' : '88');
          ctx.lineWidth = isActive ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          // Bottom edge
          ctx.strokeStyle = step.color + (isActive ? 'aa' : '55');
          ctx.lineWidth = isActive ? 2 : 1;
          ctx.beginPath();
          ctx.moveTo(p3.x, p3.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.stroke();

          // Vertical edges
          ctx.strokeStyle = step.color + (isActive ? '99' : '44');
          ctx.lineWidth = isActive ? 1.5 : 0.8;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.stroke();
        }

        // Draw cylinder base (platform)
        const platformGradient = ctx.createLinearGradient(baseX - 50, baseY + 60, baseX + 50, baseY + 80);
        platformGradient.addColorStop(0, step.color + '30');
        platformGradient.addColorStop(0.5, step.color + '50');
        platformGradient.addColorStop(1, step.color + '30');

        ctx.fillStyle = platformGradient;
        ctx.beginPath();
        ctx.ellipse(baseX, baseY + 70, 50, 15, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = step.color + '80';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw glow effect
        const glowGradient = ctx.createRadialGradient(baseX, baseY, 0, baseX, baseY, 100);
        glowGradient.addColorStop(0, step.color + (isActive ? '25' : '10'));
        glowGradient.addColorStop(0.5, step.color + (isActive ? '10' : '05'));
        glowGradient.addColorStop(1, step.color + '00');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(baseX, baseY, 100, 0, Math.PI * 2);
        ctx.fill();

        // Draw step number badge
        const badgeGradient = ctx.createRadialGradient(baseX, baseY - 70, 0, baseX, baseY - 70, 25);
        badgeGradient.addColorStop(0, step.color + 'ff');
        badgeGradient.addColorStop(1, step.color + 'dd');
        ctx.fillStyle = badgeGradient;
        ctx.beginPath();
        ctx.arc(baseX, baseY - 70, isActive ? 25 : 20, 0, Math.PI * 2);
        ctx.fill();

        // Badge border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = isActive ? 3 : 2;
        ctx.beginPath();
        ctx.arc(baseX, baseY - 70, isActive ? 25 : 20, 0, Math.PI * 2);
        ctx.stroke();

        // Number in badge
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${isActive ? '18px' : '14px'} system-ui, -apple-system, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(step.number, baseX, baseY - 70);

        // Step label
        ctx.fillStyle = step.color;
        ctx.font = `bold ${isActive ? '14px' : '12px'} system-ui, -apple-system, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(step.label, baseX, baseY + 90);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [activeStep]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
        display: 'block',
        minHeight: '500px'
      }}
    />
  );
};

export default ProcessFlow3D;
