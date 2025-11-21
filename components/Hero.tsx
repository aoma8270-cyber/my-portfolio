import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambient Effects - Light Mode */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
          <span className="text-accent text-xs font-bold tracking-widest uppercase">Available for Hire</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-800 to-gray-500">
          BUILDING THE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            FUTURE WEB
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          こんにちは、生垣 碧天です。モダンなWeb技術と洗練されたデザインを融合させ、
          記憶に残るデジタル体験を創造するエンジニアです。
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-dark text-white font-bold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-accent transition-all group shadow-sm hover:shadow-md"
                aria-label={link.name}
              >
                <div className="text-gray-500 group-hover:text-accent transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400 w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;