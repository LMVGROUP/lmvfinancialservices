import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAggregatedStats } from '@/hooks/useLoanStats';
import { useBanks } from '@/hooks/useBanks';

const formatCurrency = (amount: number) => {
  const crores = amount / 10000000;
  return `₹${crores.toFixed(1)}Cr+`;
};

const Hero = () => {
  const { data: stats, isLoading: statsLoading } = useAggregatedStats();
  const { data: banks, isLoading: banksLoading } = useBanks();

  const totalDisbursed = stats?.totalDisbursedAmount || 0;
  const happyCustomers = stats?.totalDisbursed || 0;
  const partnerBanks = banks?.length || 0;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYWEwZDYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="container-section relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="h-4 w-4" />
                Trusted Financial Partner Since 2015
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                U Dream <span className="text-primary">We Plan</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Your trusted partner for comprehensive financial solutions. 
                Personal Loans, Home Loans, Business Loans, Credit Cards — 
                we help you achieve your financial goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild className="text-base">
                  <Link to="/contact">
                    Get Financial Guidance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>

              {/* Digital Access Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="secondary" size="sm" asChild>
                  <a href="https://www.lmvfs.in" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Login to CRM
                  </a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.lakshithatech.LMVFS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="mr-2 h-4 w-4" />
                    Get the App
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-in-up">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-lg card-hover">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <div className="text-3xl font-bold text-foreground">
                  {statsLoading ? '...' : formatCurrency(totalDisbursed)}
                </div>
                <p className="text-muted-foreground text-sm mt-1">Total Disbursed</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-border shadow-lg card-hover">
                <Users className="h-10 w-10 text-primary mb-4" />
                <div className="text-3xl font-bold text-foreground">
                  {statsLoading ? '...' : `${happyCustomers.toLocaleString()}+`}
                </div>
                <p className="text-muted-foreground text-sm mt-1">Happy Customers</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-border shadow-lg card-hover">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <div className="text-3xl font-bold text-foreground">
                  {banksLoading ? '...' : `${partnerBanks}+`}
                </div>
                <p className="text-muted-foreground text-sm mt-1">Partner Banks</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground shadow-lg card-hover">
                <div className="text-3xl font-bold">10+</div>
                <p className="text-primary-foreground/80 text-sm mt-1">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
