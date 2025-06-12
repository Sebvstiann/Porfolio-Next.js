import {HeroSection } from "@/components";
import { AboutSection } from '@/components';
import { ProjectSection } from "@/components";
import { ContactSection } from '@/components/ContactSection';
import { ScrollToTop } from '@/components/ScrollToTop';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Imagen de fondo */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/fondo_portfolio.jpg"
          alt="Fondo del portafolio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#121212] opacity-50"></div>
      </div>

      <div className="container mx-auto px-12 py-10 relative z-10">
        <section id="inicio" className="pb-10">
          <HeroSection/>
        </section>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"></div>
        
        <section id="sobre-mi" className="py-10">
          <AboutSection/>
        </section>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"></div>
        
        <section id="proyectos" className="py-10">
          <ProjectSection/>
        </section>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"></div>
        
        <section id="contacto" className="py-10">
          <ContactSection/>
        </section>
      </div>

      <ScrollToTop />
    </main>
  );
}                                                                                                                                                                                                                                                                                                                                                                                          
