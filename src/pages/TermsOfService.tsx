import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | LMV Financial Services</title>
        <meta 
          name="description" 
          content="Terms of Service for LMV Financial Services Pvt Ltd. Read our terms and conditions for using our financial services." 
        />
        <link rel="canonical" href="https://lmvfinancial.com/terms-of-service" />
      </Helmet>
      <Layout>
        <section className="section-padding">
          <div className="container-section">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
              <p className="text-muted-foreground mb-6">
                Last updated: January 2024
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using the services of LMV Financial Services Pvt Ltd, you agree 
                to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                LMV Financial Services provides various financial services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Loan facilitation and advisory</li>
                <li>Mutual fund distribution</li>
                <li>Insurance advisory and distribution</li>
                <li>Investment advisory services</li>
                <li>Financial planning services</li>
                <li>Wealth management services</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of India</li>
                <li>Have a valid PAN and Aadhaar</li>
                <li>Provide accurate and complete information</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Complete required KYC documentation</li>
                <li>Keep your account credentials confidential</li>
                <li>Notify us of any unauthorized access</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Investment Risks</h2>
              <p className="text-muted-foreground mb-4">
                Investments in mutual funds and securities are subject to market risks. 
                Past performance is not indicative of future results. Please read all 
                scheme-related documents carefully before investing. We are not responsible 
                for any losses incurred due to market fluctuations.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Fees and Charges</h2>
              <p className="text-muted-foreground mb-4">
                Our fee structure varies by service and will be clearly communicated before 
                you engage our services. All applicable taxes will be charged as per 
                government regulations.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                LMV Financial Services shall not be liable for any indirect, incidental, 
                special, or consequential damages arising from the use of our services. 
                Our liability is limited to the fees paid for the specific service in question.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Any disputes arising from these terms shall be governed by the laws of India. 
                Courts in Mumbai shall have exclusive jurisdiction over any disputes.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Continued use of 
                our services after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, contact us at:<br />
                Email: legal@lmvfinancial.com<br />
                Phone: +91 98765 43210<br />
                Address: 123 Financial District, Mumbai, Maharashtra 400051
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TermsOfService;
