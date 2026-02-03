import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Shield, 
  Award, 
  HeartHandshake, 
  Target,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import FAQ from '@/components/shared/FAQ';
import CTABanner from '@/components/home/CTABanner';

const reasons = [
  {
    icon: Clock,
    title: '14+ Years of Experience',
    description: 'Since 2010, we have been helping clients navigate the complex world of finance with expertise and dedication.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your goals are our priority. We take time to understand your unique situation and create personalized solutions.',
  },
  {
    icon: Shield,
    title: 'Complete Transparency',
    description: 'No hidden fees, no complicated terms. We believe in clear communication and honest advice.',
  },
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Our team includes AMFI-registered, IRDAI-licensed, and CFP-certified professionals you can trust.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Relationships',
    description: 'We focus on building lasting partnerships, not one-time transactions. Your success is our success.',
  },
  {
    icon: Target,
    title: 'Comprehensive Solutions',
    description: 'From loans to insurance, investments to wealth management - all your financial needs under one roof.',
  },
];

const stats = [
  { number: '₹500Cr+', label: 'Assets Under Management' },
  { number: '10,000+', label: 'Happy Clients' },
  { number: '98%', label: 'Client Retention Rate' },
  { number: '48hrs', label: 'Average Loan Approval' },
];

const certifications = [
  'AMFI Registered Mutual Fund Distributor',
  'IRDAI Licensed Insurance Advisor',
  'Member - ICAI (Chartered Accountants)',
  'ISO 27001 Certified for Data Security',
];

const WhyChooseUs = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Us | LMV Financial - Experience, Trust & Transparency</title>
        <meta 
          name="description" 
          content="Discover why 10,000+ clients trust LMV Financial Services. 14+ years of experience, certified professionals, transparent practices, and personalized solutions." 
        />
        <link rel="canonical" href="https://lmvfinancial.com/why-choose-us" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-primary">LMV Financial</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                When it comes to your financial future, you need a partner you can trust. 
                Here's why thousands of clients choose LMV Financial Services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary">
          <div className="container-section">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="section-padding">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
              <p className="text-muted-foreground text-lg">
                Our commitment to excellence and client success drives everything we do.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {reasons.map((reason) => (
                <div 
                  key={reason.title} 
                  className="p-6 rounded-2xl bg-card border border-border card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <reason.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-muted/30">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Certified & Regulated
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We operate under the strict guidelines of regulatory bodies, 
                  ensuring your investments and personal data are always protected.
                </p>
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4">
                  <Link to="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <Shield className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        <CTABanner />
      </Layout>
    </>
  );
};

export default WhyChooseUs;
