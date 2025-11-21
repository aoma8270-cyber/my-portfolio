import React from 'react';
import { SectionId } from '../types';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id={SectionId.SKILLS} className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-500">Technical Skills</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            私が日常的に使用している技術スタックです。常に新しい技術を取り入れ、
            最適なソリューションを提供できるよう心がけています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(category => (
                <div key={category} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        {category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SKILLS.filter(s => s.category === category).map(skill => (
                            <div key={skill.name} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                <div className="text-accent p-2 bg-accent/10 rounded-md">
                                    {skill.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-sm text-gray-800">{skill.name}</span>
                                        <span className="text-xs text-gray-500">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;