import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden bg-[#0a0a0a]" id="home">
      {/* Grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Accent glow blobs */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#ccff00]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/4 blur-[150px] pointer-events-none" />

      {/* Horizontal label lines */}
      <div className="absolute top-24 right-6 md:right-12 flex flex-col items-end gap-1 z-10">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 48, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-px bg-[#ccff00]"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#a3a3a3]"
        >
          Available for Hire
        </motion.p>
      </div>

      {/* Location badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="absolute top-24 left-6 md:left-12 flex items-center gap-2 z-10"
      >
        <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3]">
          India — GMT+5:30
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto w-full"
        style={{ y: textY, opacity, scale }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-mono text-[#a3a3a3] text-xs md:text-sm uppercase tracking-[0.3em] mb-6"
        >
          Creative Developer & Designer
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-sans font-black leading-[0.9] tracking-tighter text-white"
          >
            COGENSZ
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-sans font-black leading-[0.9] tracking-tighter"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
          >
            STUDIO
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        >
          <p className="max-w-sm text-[#a3a3a3] font-mono text-sm leading-relaxed">
            I build interfaces that feel alive — blending engineering precision with obsessive attention to detail.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-[#ccff00] hover:text-[#ccff00] transition-all duration-300"
            >
              View Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="text-base leading-none"
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 z-20"
      >
        <motion.div
          animate={{ scaleY: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#ccff00] to-transparent origin-top"
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#a3a3a3]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
