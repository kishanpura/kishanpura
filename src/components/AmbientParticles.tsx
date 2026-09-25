import React from 'react';
import { motion } from 'motion/react';

export const AmbientParticles: React.FC = () => {
  // Lightweight hardware-accelerated floating ambient dust motes
  const particles = [
    { id: 1, x: '10%', y: '20%', size: 4, duration: 18, delay: 0 },
    { id: 2, x: '85%', y: '15%', size: 5, duration: 22, delay: 2 },
    { id: 3, x: '35%', y: '60%', size: 3, duration: 20, delay: 4 },
    { id: 4, x: '70%', y: '75%', size: 6, duration: 24, delay: 1 },
    { id: 5, x: '50%', y: '30%', size: 4, duration: 19, delay: 3 },
    { id: 6, x: '20%', y: '85%', size: 5, duration: 25, delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-emerald-400/25 blur-[1px]"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: ['0px', '-40px', '20px', '0px'],
            x: ['0px', '25px', '-25px', '0px'],
            opacity: [0.2, 0.6, 0.3, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
