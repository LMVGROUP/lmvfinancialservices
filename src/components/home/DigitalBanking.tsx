import { Globe, Smartphone, FileCheck, Clock, Shield, Bell, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const features = [
  { icon: FileCheck, label: 'Online loan applications' },
  { icon: Clock, label: 'Real-time status tracking' },
  { icon: Shield, label: 'Secure document uploads' },
  { icon: Bell, label: 'Faster approvals' },
];

const DigitalBanking = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Smartphone className="h-4 w-4" />
            Digital Transformation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital Banking, <span className="text-primary">Simplified</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            LMV Financial Services has transformed its operations digitally to provide faster, 
            transparent, and convenient financial services through our CRM platform and mobile application.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
            >
              <feature.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Web CRM Portal</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Access your dashboard, apply for loans, upload documents, and track applications online.
                  </p>
                  <Button asChild>
                    <a href="https://www.lmvfs.in" target="_blank" rel="noopener noreferrer">
                      Access Web CRM
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Smartphone className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">LMVFS Mobile App</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Download our Android app for anytime, anywhere access to your loan applications and status.
                  </p>
                  <Button asChild variant="outline">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.lakshithatech.LMVFS" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Download on Play Store
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Manage your loans and applications digitally with ease.
        </p>
      </div>
    </section>
  );
};

export default DigitalBanking;
