import React from 'react';
import { SectionId } from '../types';
import { EXPERIENCES } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Bio */}
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-dark">
              <span className="w-12 h-1 bg-accent rounded-full"></span>
              About Me
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                徳島大学理工学部理工学科光システムコースに在籍する大学生エンジニアです。「技術で人の可能性を広げる」をモットーに、
                Webアプリケーション開発を中心に活動しています。
              </p>
              <p>
                現在はReactエコシステムを中心としたフロントエンド開発に没頭していますが、
                バックエンドやインフラ構築にも興味があり、フルスタックエンジニアを目指して学習を続けています。
                きれいなコードを書くことと、直感的なUI/UXデザインを追求することに情熱を注いでいます。
              </p>
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-3xl font-bold text-accent mb-1">3+</h3>
                  <p className="text-sm text-gray-500">Years of Coding</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-3xl font-bold text-accent mb-1">15+</h3>
                  <p className="text-sm text-gray-500">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent"></div>
            <div className="space-y-12 pl-8 relative">
              {EXPERIENCES.map((exp, index) => (
                <div key={exp.id} className="relative group">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-2 border-accent bg-white group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(13,148,136,0.2)]"></div>
                  
                  <div className="flex items-center gap-2 text-sm text-accent font-mono mb-1">
                    <span>{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark mb-1 group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
              
              <div className="relative group">
                 <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-2 border-gray-300 bg-white"></div>
                 <div className="flex items-center gap-2 text-sm text-gray-500 font-mono mb-1">
                    <span>2024.04 - 2028.03 (予定)</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-1">
                    理工学部 理工学科 光システムコース
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <GraduationCap className="w-4 h-4" />
                    <span>徳島大学</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                     光工学と情報工学の融合領域を学習。
                     物理的な光の特性から、それを制御するソフトウェアシステムまで幅広く探求しています。
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;