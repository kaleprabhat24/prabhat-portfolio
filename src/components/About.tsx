import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';

const softSkills = [
  { icon: Clock, label: 'Time Management' },
  { icon: Users, label: 'Leadership' },
  { icon: Award, label: 'Public Speaking' },
  { icon: Users, label: 'Teamwork' },
];

const education = [
  {
    degree: 'B.Tech – CSE (AI/ML)',
    institution: 'Shri Ramdeobaba College of Engineering and Management',
    score: 'CGPA 8.32',
    year: '2023 – 2027',
  },
  {
    degree: 'HSC',
    institution: 'Decent Junior College',
    score: 'Percentage 82.50%',
    year: '2022',
  },
  {
    degree: 'SSC',
    institution: "St. John's High School",
    score: 'Percentage 93.20%',
    year: '2020',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A passionate technologist on a mission to create impactful solutions
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="card-3d p-6">
                <h3 className="font-display font-semibold text-xl mb-4 text-gradient">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a pre-final year BTech student specializing in Artificial Intelligence and 
                  Machine Learning. With a strong foundation in both frontend and backend development, 
                  I love building end-to-end solutions that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  My journey in tech has equipped me with skills in full-stack development, 
                  machine learning, and cloud technologies. I believe in continuous learning 
                  and pushing the boundaries of what's possible with technology.
                </p>
              </div>

              {/* Soft Skills */}
              <div className="card-3d p-6">
                <h3 className="font-display font-semibold text-xl mb-4">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill) => (
                    <div key={skill.label} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="p-2 rounded-lg bg-gradient-primary">
                        <skill.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="card-3d p-6">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.degree} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-primary" />
                    <div className="mb-1">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg mt-2">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-primary font-medium text-sm mt-1">{edu.score}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
