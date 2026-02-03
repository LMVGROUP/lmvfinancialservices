import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Globe, Smartphone } from 'lucide-react';
import { z } from 'zod';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email is too long'),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  'Personal Loan',
  'Home Loan',
  'Loan Against Property (LAP)',
  'Business Loan',
  'Car Loan',
  'Education Loan',
  'Credit Card',
  'Other',
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent Successfully!',
      description: 'We will get back to you within 24 hours.',
    });
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Contact Us | LMV Financial Services - Get in Touch</title>
          <meta 
            name="description" 
            content="Contact LMV Financial Services for loans, investments, insurance, and financial planning. Call us or fill out our contact form for a free consultation." 
          />
          <link rel="canonical" href="https://lmvfinancial.com/contact" />
        </Helmet>
        <Layout>
          <section className="section-padding min-h-[60vh] flex items-center">
            <div className="container-section">
              <div className="max-w-lg mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
                <p className="text-muted-foreground text-lg mb-8">
                  Your message has been received. Our team will contact you within 24 hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | LMV Financial Services - Get in Touch</title>
        <meta 
          name="description" 
          content="Contact LMV Financial Services for Personal Loans, Home Loans, Business Loans, and Credit Cards. Call +91 91001 08918 or email leelamanoj@lmvfs.in" 
        />
        <link rel="canonical" href="https://lmvfinancial.com/contact" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Have questions about our services? Ready to start your financial journey? 
                We're here to help. Reach out to us today.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="sm" variant="secondary">
                  <a href="https://www.lmvfs.in" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Apply Online via CRM
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.lakshithatech.LMVFS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download Mobile App
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange('service', value)}
                      >
                        <SelectTrigger className={errors.service ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <a 
                      href="tel:+919100108918" 
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+91 91001 08918</p>
                        <p className="text-sm text-primary mt-1">Click to call</p>
                      </div>
                    </a>

                    <a 
                      href="mailto:leelamanoj@lmvfs.in" 
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">leelamanoj@lmvfs.in</p>
                        <p className="text-sm text-primary mt-1">Click to email</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Registered Office</p>
                        <p className="text-muted-foreground">
                          6-3-899/1/D, Second Floor,<br />
                          R V S Kamala Castle, Raj Bhavan Road,<br />
                          Somajiguda, Hyderabad – 500082,<br />
                          Telangana, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:30 AM - 6:30 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Find Us on Map</h3>
                  <div className="aspect-video rounded-xl overflow-hidden border border-border bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4562!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974a9e6e5a85%3A0x123456789!2sSomajiguda%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="LMV Financial Services Office Location - Somajiguda, Hyderabad"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
