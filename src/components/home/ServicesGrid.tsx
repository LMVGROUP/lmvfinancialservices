import { Link } from 'react-router-dom';
import { 
  Wallet, 
  Home, 
  Building2, 
  Briefcase, 
  Car, 
  GraduationCap,
  CreditCard,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Wallet,
    title: 'Personal Loans',
    description: 'Quick unsecured loans for personal needs like medical expenses, travel, weddings, or emergencies.',
    link: '/services#personal-loans',
  },
  {
    icon: Home,
    title: 'Home Loans',
    description: 'Loans to purchase, construct, or renovate your dream home with competitive interest rates.',
    link: '/services#home-loans',
  },
  {
    icon: Building2,
    title: 'Loan Against Property',
    description: 'Secured loans by mortgaging residential or commercial property for business or personal needs.',
    link: '/services#lap',
  },
  {
    icon: Briefcase,
    title: 'Business Loans',
    description: 'Funding solutions to support business growth, expansion, and working capital needs.',
    link: '/services#business-loans',
  },
  {
    icon: Car,
    title: 'Car Loans',
    description: 'Loans to purchase new or used cars with flexible repayment options.',
    link: '/services#car-loans',
  },
  {
    icon: GraduationCap,
    title: 'Education Loans',
    description: 'Financial support for higher studies in India and abroad at competitive rates.',
    link: '/services#education-loans',
  },
  {
    icon: CreditCard,
    title: 'Credit Cards',
    description: 'Wide range of credit cards to suit lifestyle, travel, shopping, and business needs.',
    link: '/services#credit-cards',
  },
];

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive loan and credit card solutions tailored to your needs with competitive rates and quick approvals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link key={service.title} to={service.link}>
              <Card className="h-full card-hover group cursor-pointer border-border/50 hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-3 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
