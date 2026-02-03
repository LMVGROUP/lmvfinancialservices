import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-section relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get personalized financial guidance from our experts. 
            Book a free consultation today and take the first step towards achieving your financial goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 98765 43210
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
