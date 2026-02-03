import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | LMV Financial Services</title>
        <meta 
          name="description" 
          content="Privacy Policy of LMV Financial Services Pvt Ltd. Learn how we collect, use, and protect your personal information." 
        />
        <link rel="canonical" href="https://lmvfinancial.com/privacy-policy" />
      </Helmet>
      <Layout>
        <section className="section-padding">
          <div className="container-section">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-6">
                Last updated: January 2024
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                LMV Financial Services Pvt Ltd ("we", "our", or "us") is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you use our services.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Personal identification information (name, email, phone number, address)</li>
                <li>Financial information (income, assets, investment preferences)</li>
                <li>KYC documents (PAN, Aadhaar, address proof)</li>
                <li>Transaction history and account information</li>
                <li>Communication records between you and our team</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions and manage your accounts</li>
                <li>Comply with regulatory requirements (KYC/AML)</li>
                <li>Send service updates and promotional communications</li>
                <li>Improve our products and services</li>
                <li>Respond to your inquiries and support requests</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal data against unauthorized access, alteration, disclosure, or destruction. 
                Our systems are ISO 27001 certified for information security management.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Financial institutions for processing transactions</li>
                <li>Regulatory authorities as required by law</li>
                <li>Service providers who assist in our operations</li>
                <li>With your consent for other purposes</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: privacy@lmvfinancial.com<br />
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

export default PrivacyPolicy;
