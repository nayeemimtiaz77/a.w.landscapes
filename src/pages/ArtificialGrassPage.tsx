import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Droplets, Sun, PawPrint, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageLightbox from '@/components/ui/ImageLightbox';
import CTASection from '@/components/sections/CTASection';

const benefits = [
  {
    icon: Leaf,
    title: 'Low Maintenance',
    description: 'No mowing, no watering, no feeding. Just a beautiful lawn year-round.',
  },
  {
    icon: Sun,
    title: 'Always Green',
    description: 'Looks perfect in every season, rain or shine, without brown patches.',
  },
  {
    icon: PawPrint,
    title: 'Pet & Family Friendly',
    description: 'Durable, safe, and easy to clean. No mud tracked into the house.',
  },
  {
    icon: Droplets,
    title: 'Excellent Drainage',
    description: 'Proper installation ensures water drains quickly with no puddles.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Site Preparation',
    description: 'We remove existing lawn and debris, then excavate to the required depth.',
  },
  {
    step: 2,
    title: 'Levelling & Base',
    description: 'A compacted sub-base is laid to create a stable, level foundation.',
  },
  {
    step: 3,
    title: 'Sand Layer',
    description: 'A sharp sand layer provides the final levelling and drainage.',
  },
  {
    step: 4,
    title: 'Turf Installation',
    description: 'Premium artificial grass is carefully laid and joined seamlessly.',
  },
  {
    step: 5,
    title: 'Edging & Finish',
    description: 'Clean edges are created with timber or metal edging for a polished look.',
  },
];

const galleryImages = [
  { src: '/images/grass-large.jpg', alt: 'Large sandstone patio with 100+ sqm artificial lawn' },
  { src: '/images/grass-1.jpg', alt: 'Artificial grass installation' },
  { src: '/images/grass-2.jpg', alt: 'Modern artificial lawn' },
  { src: '/images/grass-3.jpg', alt: 'Family-friendly artificial grass' },
  { src: '/images/kingswood-after.jpg', alt: 'Kingswood garden transformation' },
  { src: '/images/emersons-after.jpg', alt: 'Emersons Green artificial grass project' },
];

const ArtificialGrassPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/grass-large.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-wide">
          <p className="text-accent font-medium mb-3">Specialists In</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Artificial Grass
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mb-8">
            Transform your lawn into a year-round green space with zero maintenance. 
            Perfect for busy families who want a beautiful garden without the upkeep.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-moss text-accent-foreground gap-2">
              <Link to="/contact">
                <Phone className="h-5 w-5" />
                Get a Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="https://wa.me/447772683802" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Why Choose Artificial Grass?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enjoy a perfect lawn every day of the year without the hassle of traditional grass maintenance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-premium p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Our Installation Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proper installation is key to a long-lasting, natural-looking artificial lawn. 
              Here's how we do it.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-full h-0.5 bg-border" />
                )}
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-display text-2xl font-semibold mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Our Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the quality of our artificial grass installations across Bristol.
            </p>
          </div>

          <ImageLightbox images={galleryImages} columns={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="card-premium p-6">
              <h3 className="font-semibold text-foreground mb-2">How long does artificial grass last?</h3>
              <p className="text-muted-foreground">
                With proper installation and minimal maintenance, quality artificial grass can last 15-20 years 
                while maintaining its appearance.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="font-semibold text-foreground mb-2">Is it safe for children and pets?</h3>
              <p className="text-muted-foreground">
                Absolutely. Our artificial grass is non-toxic, lead-free, and soft enough for play. 
                Pet waste is easily cleaned with water.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="font-semibold text-foreground mb-2">Will it drain properly?</h3>
              <p className="text-muted-foreground">
                Yes. We install a proper drainage system underneath, ensuring water drains quickly 
                without pooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ArtificialGrassPage;
