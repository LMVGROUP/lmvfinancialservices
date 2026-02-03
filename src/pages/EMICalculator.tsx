import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import CTABanner from '@/components/home/CTABanner';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(60);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const months = tenure;
    
    if (rate === 0) return principal / months;
    
    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <Helmet>
        <title>EMI Calculator | LMV Financial - Calculate Your Loan EMI</title>
        <meta 
          name="description" 
          content="Use LMV Financial's free EMI calculator to estimate your monthly loan payments. Calculate EMI for personal loans, home loans, and business loans." 
        />
        <link rel="canonical" href="https://lmvfinancial.com/emi-calculator" />
      </Helmet>
      <Layout>
        <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                EMI <span className="text-primary">Calculator</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Plan your finances better. Calculate your monthly EMI for any loan amount.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    Loan Details
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Loan Amount</Label>
                        <span className="font-semibold text-primary">{formatCurrency(loanAmount)}</span>
                      </div>
                      <Slider
                        value={[loanAmount]}
                        onValueChange={(value) => setLoanAmount(value[0])}
                        min={100000}
                        max={10000000}
                        step={50000}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹1 Lakh</span>
                        <span>₹1 Crore</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Interest Rate (% p.a.)</Label>
                        <span className="font-semibold text-primary">{interestRate}%</span>
                      </div>
                      <Slider
                        value={[interestRate]}
                        onValueChange={(value) => setInterestRate(value[0])}
                        min={5}
                        max={24}
                        step={0.25}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>5%</span>
                        <span>24%</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Loan Tenure</Label>
                        <span className="font-semibold text-primary">{tenure} months ({(tenure/12).toFixed(1)} years)</span>
                      </div>
                      <Slider
                        value={[tenure]}
                        onValueChange={(value) => setTenure(value[0])}
                        min={12}
                        max={360}
                        step={6}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 Year</span>
                        <span>30 Years</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground">
                    <p className="text-sm opacity-80 mb-2">Monthly EMI</p>
                    <p className="text-4xl md:text-5xl font-bold">{formatCurrency(emi)}</p>
                  </div>

                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="font-semibold mb-4">Payment Breakdown</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Principal Amount</span>
                        <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Total Interest</span>
                        <span className="font-semibold text-primary">{formatCurrency(totalInterest)}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="font-medium">Total Payment</span>
                        <span className="font-bold text-lg">{formatCurrency(totalPayment)}</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild size="lg" className="w-full">
                    <a href="/contact">Apply for Loan</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </Layout>
    </>
  );
};

export default EMICalculator;
