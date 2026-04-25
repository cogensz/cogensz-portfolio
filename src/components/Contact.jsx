import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-40 px-6 md:px-12 border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px w-10 bg-[#ccff00]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3]">03 / Contact</span>
        </div>

        {/* CTA headline */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-black text-5xl md:text-8xl text-white tracking-tighter leading-none"
          >
            Got a project?
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-black text-5xl md:text-8xl tracking-tighter leading-none"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
          >
            Let's talk.
          </motion.h2>
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 md:p-12 rounded-2xl border border-white/5 bg-[#0f0f0f] group hover:border-[#ccff00]/30 transition-colors duration-500"
        >
          <div>
            <p className="font-mono text-[#a3a3a3] text-sm uppercase tracking-widest mb-2">
              Drop me a line
            </p>
            <a
              href="mailto:cogensz@example.com"
              className="font-sans font-black text-2xl md:text-4xl text-white group-hover:text-[#ccff00] transition-colors duration-300"
            >
              cogensz@example.com
            </a>
          </div>
          <a
            href="mailto:akshay@example.com"
            className="shrink-0 w-14 h-14 rounded-full border border-[#ccff00] flex items-center justify-center text-[#ccff00] text-xl hover:bg-[#ccff00] hover:text-black transition-all duration-300"
          >
            ↗
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-8 mt-12"
        >
          {[
            { label: 'Twitter', href: '#' },
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'Dribbble', href: '#' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3] hover:text-[#ccff00] transition-colors duration-300 border-b border-transparent hover:border-[#ccff00] pb-0.5"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
