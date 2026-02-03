import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Wallet, 
  Home, 
  Building2, 
  Briefcase, 
  Car, 
  GraduationCap,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Landmark,
  FileCheck,
  Clock,
  Users,
  Phone,
  Globe,
  Smartphone
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    id: 'personal-loans',
    icon: Wallet,
    title: 'Personal Loans',
    description: 'Quick unsecured loans for personal needs like medical expenses, travel, weddings, or emergencies.',
    types: [
      'Salaried Personal Loan',
      'Self-Employed Personal Loan',
      'Instant / Short-Term Personal Loan',
      'Balance Transfer Personal Loan',
    ],
    eligibility: [
      'Age: 21 to 60 years',
      'Minimum monthly income: ₹15,000+',
      'Stable employment or business continuity',
      'Good credit score (650+ preferred)',
      'Valid KYC and income documents',
    ],
  },
  {
    id: 'home-loans',
    icon: Home,
    title: 'Home Loans',
    description: 'Loans to purchase, construct, or renovate residential property.',
    types: [
      'New Home Purchase Loan',
      'Home Construction Loan',
      'Home Improvement / Renovation Loan',
      'Home Loan Balance Transfer',
      'Plot Purchase Loan',
    ],
    eligibility: [
      'Age: 21 to 65 years at loan maturity',
      'Stable income source',
      'Property with clear legal title',
      'Minimum income as per lender norms',
      'Good repayment history / credit score',
    ],
  },
  {
    id: 'lap',
    icon: Building2,
    title: 'LAP – Loan Against Property',
    description: 'Secured loan by mortgaging residential or commercial property for business or personal needs.',
    types: [
      'Residential Property LAP',
      'Commercial Property LAP',
      'Lease Rental Discounting (LRD)',
    ],
    eligibility: [
      'Property owner (self or co-owned)',
      'Age: 25 to 70 years',
      'Stable income or business cash flow',
      'Clear property documents',
      'Good credit profile',
    ],
  },
  {
    id: 'business-loans',
    icon: Briefcase,
    title: 'Business Loans',
    description: 'Funding solutions to support business growth, expansion, and working capital needs.',
    types: [
      'Unsecured Business Loan',
      'Secured Business Loan',
      'Working Capital Loan',
      'MSME / SME Loans',
      'Machinery / Equipment Finance',
    ],
    eligibility: [
      'Business vintage: minimum 2–3 years',
      'Profitable operations or steady turnover',
      'Age: 25 to 65 years',
      'Valid business registration & GST (if applicable)',
      'Good banking and credit history',
    ],
  },
  {
    id: 'car-loans',
    icon: Car,
    title: 'Car Loans',
    description: 'Loans to purchase new or used cars with flexible repayment options.',
    types: [
      'New Car Loan',
      'Used Car Loan',
      'Loan Against Existing Car',
      'Electric Vehicle (EV) Loan',
    ],
    eligibility: [
      'Age: 21 to 65 years',
      'Salaried or self-employed with stable income',
      'Minimum income as per lender norms',
      'Valid driving license & KYC',
      'Acceptable credit score',
    ],
  },
  {
    id: 'education-loans',
    icon: GraduationCap,
    title: 'Educational Loans',
    description: 'Financial support for higher studies in India and abroad.',
    types: [
      'Domestic Education Loan',
      'Overseas Education Loan',
      'Skill Development / Vocational Course Loan',
      'Top-up Education Loan',
    ],
    eligibility: [
      'Indian citizen',
      'Confirmed admission to recognized institution',
      'Co-applicant (parent/guardian) with stable income',
      'Good academic background',
      'Acceptable credit profile of co-applicant',
    ],
  },
  {
    id: 'credit-cards',
    icon: CreditCard,
    title: 'Credit Cards',
    description: 'Wide range of credit cards to suit lifestyle, travel, shopping, and business needs.',
    types: [
      'Entry-Level Credit Cards',
      'Cashback Credit Cards',
      'Rewards & Lifestyle Cards',
      'Travel Credit Cards',
      'Business Credit Cards',
      'Secured Credit Cards (FD backed)',
    ],
    eligibility: [
      'Age: 21 to 60 years',
      'Salaried or self-employed',
      'Minimum monthly income as per card type',
      'Good credit score (700+ preferred)',
      'Valid KYC documents',
    ],
  },
];

const features = [
  { icon: Landmark, title: 'Multiple Bank Tie-ups', description: 'Access to 39+ leading banks and NBFCs' },
  { icon: FileCheck, title: 'Competitive Rates', description: 'Best-in-class interest rates negotiated for you' },
  { icon: Clock, title: 'Quick Approvals', description: 'Fast-track processing in 24-48 hours' },
  { icon: Users, title: 'End-to-End Assistance', description: 'Dedicated support from application to disbursal' },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Loans & Credit Cards | LMV Financial Services - Personal, Home, Business Loans</title>
        <meta 
          name="description" 
          content="LMV Financial Services offers Personal Loans, Home Loans, LAP, Business Loans, Car Loans, Education Loans and Credit Cards with competitive rates and quick approvals." 
        />
        <meta name="keywords" content="personal loan, home loan, business loan, car loan, education loan, credit card, LAP, Hyderabad, India" />
        <link rel="canonical" href="https://lmvfinancial.com/services" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Financial Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Loans and Credit Cards tailored to your needs. Professional guidance, 
                competitive rates, and hassle-free processing.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://www.lmvfs.in" target="_blank" rel="noopener noreferrer">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Talk to Our Advisor
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Apply & Track Digitally Section */}
        <section className="py-8 bg-primary/5 border-y border-border">
          <div className="container-section">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Apply & Track Digitally</h3>
                <p className="text-muted-foreground text-sm">
                  All services supported through our digital CRM platform and Android mobile app for faster processing and better transparency.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <a href="https://www.lmvfs.in" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Apply Online
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.lakshithatech.LMVFS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download App
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Features */}
        <section className="py-8 border-b border-border">
          <div className="container-section">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground hidden md:block">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-section">
            <div className="space-y-8">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  id={service.id}
                  className="scroll-mt-24 overflow-hidden border-border/50 hover:border-primary/30 transition-colors"
                >
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl mb-2">{service.title}</CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
                        <p className="text-xs text-primary mt-2 flex items-center gap-1">
                          <Globe className="h-3 w-3" />
                          Available for online application via LMVFS CRM & Mobile App
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="types" className="border-b-0">
                        <AccordionTrigger className="text-base font-semibold hover:no-underline py-3">
                          Types of {service.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid sm:grid-cols-2 gap-2 pt-2">
                            {service.types.map((type) => (
                              <li key={type} className="flex items-start gap-2 p-2 rounded-lg bg-muted/50">
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm">{type}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="eligibility" className="border-b-0">
                        <AccordionTrigger className="text-base font-semibold hover:no-underline py-3">
                          Eligibility Criteria
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid sm:grid-cols-2 gap-2 pt-2">
                            {service.eligibility.map((criteria) => (
                              <li key={criteria} className="flex items-start gap-2 p-2 rounded-lg bg-muted/50">
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm">{criteria}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-3">
                      <Button asChild>
                        <a href="https://www.lmvfs.in" target="_blank" rel="noopener noreferrer">
                          Apply for {service.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/contact">Get Expert Advice</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not sure which loan suits you?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Our financial experts will help you find the right product based on your needs and eligibility.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link to="/emi-calculator">
                    Try EMI Calculator
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
