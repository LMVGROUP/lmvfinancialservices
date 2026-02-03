import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import BankPartners from '@/components/home/BankPartners';
import ServicesGrid from '@/components/home/ServicesGrid';
import DigitalBanking from '@/components/home/DigitalBanking';
import LiveStats from '@/components/home/LiveStats';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LMV Financial Services | Personal Loans, Home Loans, Business Loans & Credit Cards</title>
        <meta 
          name="description" 
          content="LMV Financial Services Pvt Ltd - Your trusted partner for Personal Loans, Home Loans, LAP, Business Loans, Car Loans, Education Loans and Credit Cards in India." 
        />
        <meta name="keywords" content="personal loan, home loan, business loan, car loan, education loan, credit card, LAP, Hyderabad, India" />
        <link rel="canonical" href="https://lmvfinancial.com" />
      </Helmet>
      <Layout>
        <Hero />
        <TrustBadges />
        <BankPartners />
        <ServicesGrid />
        <DigitalBanking />
        <LiveStats />
        <AboutPreview />
        <Testimonials />
        <CTABanner />
      </Layout>
    </>
  );
};

export default Index;
