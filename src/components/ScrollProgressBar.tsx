import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-60 h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#F97316] origin-left shadow-[0_0_12px_rgba(16,185,129,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};
