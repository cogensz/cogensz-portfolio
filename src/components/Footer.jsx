import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 -z-10 bg-[#050505] px-6 md:px-12 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left */}
        <div>
          <a href="#" className="font-sans font-black text-2xl text-white tracking-tighter mb-3 block">
            COGENSZ<span className="text-[#ccff00]">.</span>
          </a>
          <p className="font-mono text-xs text-[#a3a3a3] leading-relaxed max-w-xs">
            Creative developer building digital products that matter.
          </p>
        </div>

        {/* Right nav */}
        <nav className="flex gap-6 flex-wrap">
          {['Work', 'About', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-[#a3a3a3] hover:text-[#ccff00] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#a3a3a3]/50">
        <p>© {new Date().getFullYear()} Cogensz Studio — All rights reserved.</p>
        <p>Built with React + Framer Motion + ♥</p>
      </div>
    </footer>
  );
}
