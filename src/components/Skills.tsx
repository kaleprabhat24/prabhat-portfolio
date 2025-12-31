import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Layout, Server, Brain, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C/C++', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'JSX', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'Django', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'JWT', level: 80 },
      { name: 'WebSockets', level: 70 },
    ],
  },
  {
    title: 'AI/ML',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'OpenCV', level: 78 },
      { name: 'NLP', level: 72 },
      { name: 'Machine Learning', level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: Wrench,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    skills: [
      { name: 'AWS Basics', level: 65 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 60 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const softSkills = [
  'Problem-solving',
  'Leadership',
  'Time Management',
  'Public Speaking',
  'Effective Communication',
  'Teamwork',
  'Adaptability',
  'Critical Thinking',
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A comprehensive toolkit for building modern applications
          </p>

          {/* Technical Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="card-3d p-6"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${catIndex * 0.1 + skillIndex * 0.05}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="card-3d p-6 max-w-4xl mx-auto">
            <h3 className="font-display font-semibold text-xl text-center mb-6">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
