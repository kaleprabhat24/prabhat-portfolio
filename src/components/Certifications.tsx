import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Continuous learning and professional development
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="card-3d p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center glow">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-4">
                View All Certifications
              </h3>
              <p className="text-muted-foreground mb-6">
                I have earned multiple certifications in various technologies and platforms. 
                Click below to view my complete certification portfolio on Google Drive.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                <a
                  href="https://drive.google.com/drive/folders/1p60Ur7J8Z39OJ7ZdkR0y45NlWGVpSLfm?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Certifications
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
