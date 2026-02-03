import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Expert team with 14+ years of industry experience',
  'Personalized financial strategies for every client',
  'Transparent fee structure with no hidden charges',
  'Comprehensive range of financial products',
];

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-primary">LMV Financial</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              LMV Financial Services Pvt Ltd has been a trusted name in the financial services 
              industry since 2010. We believe in building long-term relationships with our 
              clients through transparency, integrity, and exceptional service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of certified financial experts works closely with you to understand 
              your unique needs and create customized solutions that align with your 
              financial goals and risk appetite.
            </p>
            
            <ul className="space-y-3 pt-2">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-4">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-bold text-primary/20">14+</div>
                  <p className="text-lg font-medium text-foreground mt-2">Years of Trust</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10" />
              <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-secondary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
