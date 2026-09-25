import React from 'react';
import { motion } from 'motion/react';

interface VillageLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'emblem' | 'full' | 'icon';
  theme?: 'dark' | 'light';
  animated?: boolean;
  className?: string;
}

export const VillageLogo: React.FC<VillageLogoProps> = ({
  size = 'md',
  variant = 'full',
  theme = 'dark',
  animated = true,
  className = '',
}) => {
  // Dimensional mappings
  const dimensions = {
    sm: { icon: 32, text: 'text-sm', sub: 'text-[9px]' },
    md: { icon: 42, text: 'text-base', sub: 'text-[11px]' },
    lg: { icon: 56, text: 'text-xl', sub: 'text-xs' },
    xl: { icon: 72, text: 'text-2xl', sub: 'text-sm' },
  }[size];

  const dim = dimensions.icon;

  const EmblemSVG = (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        <linearGradient id="canalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <linearGradient id="citrusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="60%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>

      {/* Outer Hexagonal Shield Ring */}
      <polygon
        points="50,4 92,26 92,74 50,96 8,74 8,26"
        fill={theme === 'dark' ? '#090D16' : '#FFFFFF'}
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
      />

      {/* Inner Fill */}
      <polygon
        points="50,9 87,28 87,72 50,91 13,72 13,28"
        fill="url(#shieldGrad)"
        opacity="0.22"
      />

      {/* Wheat Stalks (Left) */}
      <g stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M22,65 Q25,45 28,30" />
        <ellipse cx="23" cy="40" rx="3.5" ry="1.5" transform="rotate(-30 23 40)" fill="url(#goldGrad)" />
        <ellipse cx="27" cy="35" rx="3.5" ry="1.5" transform="rotate(30 27 35)" fill="url(#goldGrad)" />
        <ellipse cx="24" cy="50" rx="4" ry="1.8" transform="rotate(-35 24 50)" fill="url(#goldGrad)" />
        <ellipse cx="28" cy="46" rx="4" ry="1.8" transform="rotate(35 28 46)" fill="url(#goldGrad)" />
      </g>

      {/* Wheat Stalks (Right) */}
      <g stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M78,65 Q75,45 72,30" />
        <ellipse cx="77" cy="40" rx="3.5" ry="1.5" transform="rotate(30 77 40)" fill="url(#goldGrad)" />
        <ellipse cx="73" cy="35" rx="3.5" ry="1.5" transform="rotate(-30 73 35)" fill="url(#goldGrad)" />
        <ellipse cx="76" cy="50" rx="4" ry="1.8" transform="rotate(35 76 50)" fill="url(#goldGrad)" />
        <ellipse cx="72" cy="46" rx="4" ry="1.8" transform="rotate(-35 72 46)" fill="url(#goldGrad)" />
      </g>

      {/* Flowing Himalayan Canal Water Waves */}
      <path
        d="M22,76 Q35,70 50,76 T78,76"
        stroke="url(#canalGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M26,82 Q38,78 50,82 T74,82"
        stroke="url(#canalGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.8"
        fill="none"
      />

      {/* Center Kinnow Citrus Symbol */}
      <circle cx="50" cy="48" r="14" fill="url(#citrusGrad)" />
      {/* Citrus Leaf */}
      <path
        d="M50,34 Q56,30 58,24 Q50,26 50,34 Z"
        fill="#34D399"
      />
      {/* Leaf Vein */}
      <path d="M51,33 Q54,28 57,25" stroke="#059669" strokeWidth="0.8" fill="none" />
      {/* Sunlit Citrus Glow */}
      <ellipse cx="46" cy="43" rx="4" ry="2" transform="rotate(-25 46 43)" fill="#FEF08A" opacity="0.6" />

      {/* Centennial Crown / Star */}
      <polygon
        points="50,15 52,20 57,20 53,23 54,28 50,25 46,28 47,23 43,20 48,20"
        fill="url(#goldGrad)"
      />

      {/* Monogram 'K' inside Kinnow */}
      <text
        x="50"
        y="53.5"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fill="#FFFFFF"
        style={{ letterSpacing: '0.5px' }}
      >
        K
      </text>
    </svg>
  );

  if (variant === 'icon' || variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center relative ${className}`}>
        {animated ? (
          <motion.div
            whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
            transition={{ duration: 0.4 }}
          >
            {EmblemSVG}
          </motion.div>
        ) : (
          EmblemSVG
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {animated ? (
        <motion.div
          whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {EmblemSVG}
        </motion.div>
      ) : (
        EmblemSVG
      )}

      <div>
        <div className="flex items-center gap-2">
          <span
            className={`font-display-modern font-extrabold tracking-tight ${dimensions.text} ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Kishanpura
          </span>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold hidden sm:inline-block">
            PIN 335062
          </span>
        </div>
        <p className={`font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} ${dimensions.sub} leading-none mt-0.5`}>
          Utrada · Rajasthan · Est. 1926
        </p>
      </div>
    </div>
  );
};
