import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years of experience' },
  { value: '40+', label: 'Projects shipped' },
  { value: '99%', label: 'Client satisfaction' },
  { value: '∞', label: 'Lines of passion' },
];

function RevealLine({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: '0%', opacity: 1 } : {}}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px 0px' });

  return (
    <section className="bg-[#0a0a0a] py-24 md:py-40 px-6 md:px-12" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="h-px w-10 bg-[#ccff00]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3]">
            00 / About
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left — big text */}
          <div>
            <RevealLine delay={0}>
              <h2 className="font-sans font-black text-4xl md:text-6xl text-white leading-[1.05] tracking-tighter mb-4">
                I don't just build websites.
              </h2>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h2 className="font-sans font-black text-4xl md:text-6xl leading-[1.05] tracking-tighter mb-10"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
                I build experiences.
              </h2>
            </RevealLine>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-mono text-[#a3a3a3] text-sm leading-[2] max-w-md"
            >
              Hi — I'm Cogensz, a creative developer based in India with a deep interest in the intersection of design and code. 
              I specialize in building performant, visually rich web applications that communicate brand identity through motion and interaction.
              <br /><br />
              Before going full-stack creative, I was formally trained in Computer Science. I've since blended that engineering rigour with a self-taught eye for design.
            </motion.p>
          </div>

          {/* Right — stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 bg-[#0f0f0f] flex flex-col gap-2 group hover:bg-[#141414] transition-colors duration-300"
              >
                <span className="font-sans font-black text-4xl md:text-5xl text-[#ccff00] group-hover:scale-110 origin-left transition-transform duration-300 inline-block">
                  {stat.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
