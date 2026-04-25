import { useRef } from 'react';
import { motion } from 'framer-motion';

const items = [
  'React', '·', 'Next.js', '·', 'Framer Motion', '·', 'GSAP', '·', 'Three.js', '·',
  'Figma', '·', 'TypeScript', '·', 'Node.js', '·', 'WebGL', '·', 'Tailwind', '·',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#0a0a0a] border-y border-white/5 py-4 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
        className="flex gap-6 whitespace-nowrap will-change-transform"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-xs uppercase tracking-widest ${
              item === '·' ? 'text-[#ccff00]' : 'text-[#a3a3a3]'
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
