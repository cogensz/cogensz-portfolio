import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <ProgressBar />
      <Navbar />

      {/* Main content layer — solid bg so footer reveal works */}
      <main className="relative z-10 bg-[#0a0a0a]">
        <Hero />
        <Marquee />
        <ProjectGallery />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
