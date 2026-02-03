import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  FileText, 
  Users, 
  Shield, 
  Briefcase,
  Mail,
  ArrowRight,
  BadgeCheck,
  Landmark,
  Scale
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LiveStats from '@/components/home/LiveStats';

const directors = [
  {
    name: 'Leela Manoj Varma Thotakuru',
    role: 'Director',
    initials: 'LMV',
  },
  {
    name: 'Lakshmi Satyavathi Kalidindi',
    role: 'Director',
    initials: 'LSK',
  },
];

const services = [
  'Loans',
  'Mutual Funds',
  'Fixed Deposits',
  'Insurance',
  'Property Loans',
  'Car Loans',
  'Education Loans',
  'Financial Planning',
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | LMV Financial Services Private Limited</title>
        <meta 
          name="description" 
          content="Learn about LMV Financialservices Private Limited - A professionally managed financial services company incorporated in 2015, providing loans, investments, insurance, and financial planning in India." 
        />
        <meta name="keywords" content="LMV Financial Services, financial services India, loans, mutual funds, insurance, Hyderabad" />
        <link rel="canonical" href="https://lmvfinancial.com/about" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">LMV Financial Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Building trust through transparency, experience, and unwavering commitment to our clients since 2015. 
                Your reliable partner for comprehensive financial solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Building2 className="h-4 w-4" />
                  Company Overview
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  LMV Financialservices Private Limited
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  LMV Financialservices Private Limited is a professionally managed private limited company 
                  providing comprehensive financial services and solutions across India. Registered with the 
                  Registrar of Companies (RoC), Hyderabad, we operate with full regulatory compliance and 
                  transparency.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As an active company limited by shares, we are committed to delivering trustworthy 
                  financial guidance to individuals and businesses, helping them achieve their financial 
                  goals through our range of products and services.
                </p>
              </div>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Corporate Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Company Name</span>
                      <span className="font-medium text-right">LMV Financialservices Private Limited</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">CIN</span>
                      <span className="font-mono text-sm">U65910TG2015PTC100564</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Company Type</span>
                      <span className="font-medium">Private Limited (Unlisted)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Status</span>
                      <span className="inline-flex items-center gap-1.5 text-green-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Active
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Registered With</span>
                      <span className="font-medium">RoC, Hyderabad</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Incorporation & Legacy */}
        <section className="section-padding bg-muted/30">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Incorporation & <span className="text-primary">Legacy</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A decade of trust, stability, and consistent service to our valued clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center card-hover">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Calendar className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">04 Sep 2015</p>
                  <p className="text-sm text-muted-foreground">Date of Incorporation</p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">~10 Years</p>
                  <p className="text-sm text-muted-foreground">Years of Operation</p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">1000+</p>
                  <p className="text-sm text-muted-foreground">Satisfied Clients</p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-sm text-muted-foreground">Compliance Record</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
              Over the years, we have built long-term relationships with our clients, focusing on 
              stability, trust, and steady growth. Our consistent track record reflects our 
              commitment to sustainable business practices.
            </p>
          </div>
        </section>

        {/* Registered Office */}
        <section className="section-padding">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <MapPin className="h-4 w-4" />
                  Registered Office
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Location
                </h2>
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-2">Hyderabad Office</p>
                        <address className="not-italic text-muted-foreground leading-relaxed">
                          6-3-899/1/D, Second Floor,<br />
                          R V S Kamala Castle, Raj Bhavan Road,<br />
                          Somajiguda, Hyderabad,<br />
                          Telangana – 500082, India
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4562!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSomajiguda%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LMV Financial Services Office Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Business Activities */}
        <section className="section-padding bg-muted/30">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Briefcase className="h-4 w-4" />
                Business Activities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Engaged in financial leasing and comprehensive financial services under NIC Code: 6591
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {services.map((service) => (
                <div 
                  key={service} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <BadgeCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Stats */}
        <LiveStats />

        {/* Capital Structure */}
        <section className="section-padding">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Landmark className="h-4 w-4" />
                  Capital Structure
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Financial Standing</h2>
              </div>

              <Card>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-semibold">Capital Type</th>
                        <th className="text-right p-4 font-semibold">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 text-muted-foreground">Authorized Share Capital</td>
                        <td className="p-4 text-right font-semibold">₹10,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Paid-up Share Capital</td>
                        <td className="p-4 text-right font-semibold">₹10,00,000</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="section-padding bg-muted/30">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Board of Directors</h2>
              <p className="text-muted-foreground text-lg">
                Guided by experienced leadership committed to responsible governance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {directors.map((director) => (
                <Card key={director.name} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold text-primary">{director.initials}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{director.name}</h3>
                    <p className="text-primary font-medium">{director.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Filings */}
        <section className="section-padding">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Scale className="h-4 w-4" />
                  Compliance & Filings
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Statutory Compliance
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  LMV Financialservices Private Limited maintains complete transparency in its 
                  statutory compliance. We adhere to all regulatory requirements and ensure 
                  timely filings with the Registrar of Companies.
                </p>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Last AGM Held</span>
                      <span className="font-semibold">30 September 2023</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Last Balance Sheet Filed</span>
                      <span className="font-semibold">31 March 2023</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Landmark className="h-4 w-4" />
                  Banking Relationships
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Charges & Liabilities
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The company maintains formal banking relationships with established financial institutions.
                </p>
                <Card className="bg-muted/50">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Registered secured charges with HDFC Bank during 2022–2023, totaling approximately 
                      <span className="font-semibold text-foreground"> ₹41.5 lakh</span>, reflecting 
                      our formal banking relationships and operational requirements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Brand & Market Presence */}
        <section className="section-padding bg-primary/5">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Brand & Market Presence
              </h2>
              <Card className="text-left">
                <CardContent className="p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="font-semibold text-primary">"LMV Financial Services"</span> is 
                    the operating brand name used in the market for all customer-facing services and 
                    communications. The legal entity remains{' '}
                    <span className="font-semibold text-foreground">LMV Financialservices Private Limited</span>{' '}
                    as per Ministry of Corporate Affairs (MCA) records.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Group / Related Entity */}
        <section className="section-padding">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 className="h-4 w-4" />
                Group Company
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                LMV Investment Services Private Limited
              </h2>
              <p className="text-muted-foreground text-lg">
                A complementary group company engaged in investment and financial intermediation services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg mb-4">Company Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">CIN</span>
                          <span className="font-mono text-sm">U65990TG2020PTC138329</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Incorporated</span>
                          <span className="font-medium">January 2020</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-muted-foreground">Business</span>
                          <span className="font-medium text-right">Investment & Financial<br />Intermediation Services</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg mb-4">Key Personnel</h3>
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-muted/50">
                          <p className="font-medium">Leela Manoj Varma Thotakuru</p>
                          <p className="text-sm text-muted-foreground">Director</p>
                          <a href="mailto:Leelamanoj@lmvfs.in" className="text-sm text-primary hover:underline">
                            Leelamanoj@lmvfs.in
                          </a>
                        </div>
                        <div className="p-3 rounded-lg bg-muted/50">
                          <p className="font-medium">Naga Aditya Varma Kucharlapati</p>
                          <p className="text-sm text-muted-foreground">Director</p>
                        </div>
                        <div className="p-3 rounded-lg bg-muted/50">
                          <p className="font-medium">Lakshmi Narasimha Reddy</p>
                          <p className="text-sm text-muted-foreground">Principal Officer</p>
                          <a href="mailto:PO@lmvinsurance.com" className="text-sm text-primary hover:underline">
                            PO@lmvinsurance.com
                          </a>
                        </div>
                        <div className="p-3 rounded-lg bg-muted/50">
                          <p className="font-medium">Ravi Teja Reddy Guduri</p>
                          <p className="text-sm text-muted-foreground">CEO</p>
                          <a href="mailto:raviteja@lmvfs.in" className="text-sm text-primary hover:underline">
                            raviteja@lmvfs.in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-muted/30">
          <div className="container-section">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Information</h2>
              <Card className="mb-8">
                <CardContent className="p-6 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:leelamanoj@lmvfs.in" className="text-lg font-semibold text-primary hover:underline">
                      leelamanoj@lmvfs.in
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Closing Statement & CTA */}
        <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="container-section relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Our Commitment to You
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                At LMV Financial Services, we are committed to upholding the highest standards of 
                integrity, transparency, and customer trust. Our goal is to build lasting financial 
                partnerships that help you achieve your dreams while ensuring complete regulatory 
                compliance and ethical business practices.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="text-base">
                  <Link to="/contact">
                    Talk to Our Advisors
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/services">
                    Explore Our Services
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

export default About;
