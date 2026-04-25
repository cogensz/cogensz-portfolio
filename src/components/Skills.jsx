import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const categories = [
  {
    label: 'Design',
    skills: ['UI / UX Design', 'Design Systems', 'Figma', 'Motion Design', 'Brand Identity'],
  },
  {
    label: 'Frontend',
    skills: ['React / Next.js', 'TypeScript', 'Framer Motion', 'GSAP / WebGL', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'REST & GraphQL', 'Supabase / Firebase', 'Docker'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section className="bg-[#060606] py-24 md:py-40 px-6 md:px-12 border-t border-white/5" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px w-10 bg-[#ccff00]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3]">02 / Skills</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-20">
          <h2 className="font-sans font-black text-5xl md:text-7xl text-white tracking-tighter leading-none">
            My Stack
          </h2>
          <p className="max-w-xs font-mono text-sm text-[#a3a3a3] leading-relaxed self-end">
            The tools and technologies I reach for when building best-in-class products.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {categories.map((cat, ci) => (
            <div key={cat.label} className="bg-[#0a0a0a] p-10 flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="font-mono text-xs uppercase tracking-widest text-[#ccff00]"
              >
                {cat.label}
              </motion.span>
              <ul className="flex flex-col gap-4">
                {cat.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: ci * 0.1 + si * 0.06 }}
                    className="group flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#a3a3a3] group-hover:bg-[#ccff00] transition-colors duration-300" />
                    <span className="font-sans font-medium text-lg text-white/80 group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
          {['Discover', 'Design', 'Develop', 'Deliver'].map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors duration-300"
            >
              <span className="font-mono text-[10px] text-[#ccff00] uppercase tracking-widest block mb-2">
                0{i + 1}
              </span>
              <span className="font-sans font-bold text-xl text-white">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
