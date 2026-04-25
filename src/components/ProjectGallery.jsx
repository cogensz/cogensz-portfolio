import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'Lumina OS',
    category: 'Web Application',
    year: '2024',
    tech: ['React', 'Three.js', 'Node.js'],
    description:
      'A browser-based creative operating system UI — drag-and-drop windows, live wallpapers, and a real-time music player. Featured on Awwwards.',
    accent: '#ccff00',
    bg: '#0f0f0f',
  },
  {
    id: '02',
    title: 'Aether Store',
    category: 'E-Commerce',
    year: '2024',
    tech: ['Next.js', 'Shopify', 'Framer Motion'],
    description:
      'A luxury streetwear e-commerce platform with 3D product rotation, size-guided fitting, and a one-click checkout flow. 40 % uplift in conversion.',
    accent: '#ffffff',
    bg: '#111111',
  },
  {
    id: '03',
    title: 'Vortex Dashboard',
    category: 'SaaS Product',
    year: '2023',
    tech: ['React', 'D3.js', 'Tailwind'],
    description:
      'Analytics dashboard for a $4 M ARR SaaS platform. Real-time charts, multi-tenant auth, and a plugin system that reduced dev time by 60 %.',
    accent: '#a3a3a3',
    bg: '#0d0d0d',
  },
  {
    id: '04',
    title: 'Nexus Portfolio',
    category: 'Creative Site',
    year: '2023',
    tech: ['GSAP', 'WebGL', 'Vite'],
    description:
      'Award-winning portfolio for a Berlin-based art director — custom WebGL distortion on hover, liquid cursor, and a noise-driven hero animation.',
    accent: '#ccff00',
    bg: '#101010',
  },
];

export default function ProjectGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);

  return (
    <section className="bg-[#0a0a0a] relative" id="work">
      {/* Section header (always visible) */}
      <div className="px-6 md:px-12 pt-24 pb-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-10 bg-[#ccff00]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3]">01 / Selected Work</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <h2 className="font-sans font-black text-5xl md:text-7xl text-white tracking-tighter leading-none">
            Projects that<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
              made an impact.
            </span>
          </h2>
          <p className="max-w-xs font-mono text-sm text-[#a3a3a3] leading-relaxed self-end">
            A curated selection of work spanning product design, creative development, and interactive storytelling.
          </p>
        </div>
      </div>

      {/* ── Desktop: horizontal scroll ── */}
      <div ref={targetRef} className="relative hidden md:block" style={{ height: `${projects.length * 60}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-12 will-change-transform">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ scale: 0.94, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ margin: '-80px', once: false }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-[70vw] max-w-2xl shrink-0 h-[70vh] flex flex-col justify-between p-10 rounded-2xl cursor-pointer group relative overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-500"
                style={{ backgroundColor: project.bg }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(400px circle at 50% 50%, ${project.accent}10, transparent 70%)` }}
                />

                {/* Top row */}
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3] block mb-1">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-[#a3a3a3]/50">{project.year}</span>
                  </div>
                  <span className="font-sans font-black text-5xl leading-none opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    {project.id}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap relative z-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 text-[#a3a3a3]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="relative z-10">
                  <p className="font-mono text-sm text-[#a3a3a3] leading-relaxed mb-6 max-w-sm">
                    {project.description}
                  </p>
                  <div className="flex items-end justify-between">
                    <h3
                      className="font-sans font-black text-5xl leading-none tracking-tighter text-white group-hover:text-opacity-90 transition-colors duration-300"
                      style={{ color: `${project.accent}` }}
                    >
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-[#a3a3a3] group-hover:text-[#ccff00] transition-colors duration-300 flex items-center gap-1">
                      View →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* trailing space */}
            <div className="w-32 shrink-0" />
          </motion.div>
        </div>
      </div>

      {/* ── Mobile: vertical stack ── */}
      <div className="md:hidden px-6 pb-24 flex flex-col gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="rounded-2xl p-8 flex flex-col gap-6 border border-white/5"
            style={{ backgroundColor: project.bg }}
          >
            <div className="flex justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3]">{project.category}</span>
              <span className="font-mono text-xs text-[#a3a3a3]/50">{project.year}</span>
            </div>
            <h3 className="font-sans font-black text-3xl tracking-tighter" style={{ color: project.accent }}>
              {project.title}
            </h3>
            <p className="font-mono text-sm text-[#a3a3a3] leading-relaxed">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 text-[#a3a3a3]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
