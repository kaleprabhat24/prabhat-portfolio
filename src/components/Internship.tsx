import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Shield, Cloud, Lock, Server } from 'lucide-react';

const learnings = [
  { icon: Shield, label: 'Zero Trust Architecture' },
  { icon: Cloud, label: 'AWS IAM' },
  { icon: Server, label: 'VPC Configuration' },
  { icon: Lock, label: 'GuardDuty' },
];

export default function Internship() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="internship" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4">
            <span className="text-gradient">Internship</span> Experience
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Hands-on experience in enterprise cloud security
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="card-3d p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-primary shrink-0">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-1">
                    Zscaler Zero Trust Cloud Security
                  </h3>
                  <p className="text-primary font-medium">Virtual Internship Program</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Explored comprehensive cloud security concepts including Zero Trust implementation 
                principles, AWS security services, and modern enterprise security architecture. 
                Gained hands-on experience with industry-leading security tools and methodologies.
              </p>

              <h4 className="font-semibold text-lg mb-4">Key Learnings</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {learnings.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.label}</span>
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
