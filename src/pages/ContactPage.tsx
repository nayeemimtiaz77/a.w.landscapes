import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const services = [
  'Artificial Grass',
  'Patio & Decking',
  'Fence & Gate Installation',
  'Pergola',
  'Retaining Wall',
  'Railings',
  'Other',
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/kingswood-after.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-wide">
          <p className="text-accent font-medium mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Let's Talk About Your Garden
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Ready to transform your outdoor space? Get in touch for a free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <a
                  href="tel:+447772683802"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                >
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                    <p className="font-semibold text-foreground">+44 7772 683802</p>
                  </div>
                </a>

                <a
                  href="mailto:a.w.landscapes@outlook.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                >
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">a.w.landscapes@outlook.com</p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/J6pAQJDoyfmKagTT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                >
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Bristol, BS11</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp CTA */}
              <div className="card-premium p-6 bg-[#25D366]/10 border-[#25D366]/20">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Fastest way to get a quote. Send us photos of your garden and we'll get back to you quickly.
                </p>
                <Button asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-full gap-2">
                  <a href="https://wa.me/447772683802" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-premium p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Request a Free Quote
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your name"
                          className="bg-background"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your@email.com"
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone *
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="07xxx xxxxxx"
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service Interested In *
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleChange('service', value)}
                          required
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Tell Us About Your Project *
                        </label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Describe your garden project, including any specific requirements or ideas..."
                          rows={5}
                          className="bg-background resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-moss text-accent-foreground gap-2"
                        size="lg"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39488.98569746695!2d-2.7241!3d51.4889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd2d1d0a683%3A0x8b8e1d7e0b9e8b0!2sBristol%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="A.W Landscapes Location"
        />
      </section>
    </Layout>
  );
};

export default ContactPage;
