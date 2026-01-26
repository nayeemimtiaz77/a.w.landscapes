import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Fence, LayoutGrid, Home, Layers, Grid3X3, Leaf, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/sections/CTASection';

const services = [
  {
    id: 'fencing',
    icon: Fence,
    title: 'Fence & Gate Installation',
    intro: 'Enhance your garden\'s privacy, security, and appearance with our professional fencing solutions.',
    includes: [
      'Timber fencing (closeboard, panel, picket)',
      'Bespoke gate design and installation',
      'Trellis and privacy screens',
      'Post replacement and repairs',
    ],
    why: 'Quality fencing adds value to your property while creating defined spaces and security. We use premium materials that withstand British weather.',
    image: '/images/cribbs-after.jpg',
  },
  {
    id: 'patio',
    icon: LayoutGrid,
    title: 'Patio & Decking',
    intro: 'Create stunning outdoor living spaces perfect for entertaining or relaxing.',
    includes: [
      'Porcelain and natural stone patios',
      'Timber and composite decking',
      'Steps and level changes',
      'Drainage solutions',
    ],
    why: 'A well-designed patio extends your living space outdoors. We ensure proper foundations and drainage for a finish that lasts decades.',
    image: '/images/thornbury-1.jpg',
  },
  {
    id: 'pergola',
    icon: Home,
    title: 'Pergola Design & Build',
    intro: 'Add architectural interest and shade to your garden with a bespoke pergola.',
    includes: [
      'Timber pergolas and gazebos',
      'Louvred roof systems',
      'Integrated lighting options',
      'Climbing plant supports',
    ],
    why: 'Pergolas create defined outdoor rooms, perfect for dining areas or hot tub enclosures. They add vertical interest and can support beautiful climbing plants.',
    image: '/images/banwell-pergola.jpg',
  },
  {
    id: 'retaining',
    icon: Layers,
    title: 'Retaining Wall Installation',
    intro: 'Solve drainage issues and create usable level spaces on sloped gardens.',
    includes: [
      'Sleeper retaining walls',
      'Block and render walls',
      'Natural stone walls',
      'Integrated drainage',
    ],
    why: 'Retaining walls turn unusable slopes into functional garden areas. Proper construction ensures stability and prevents water damage to your property.',
    image: '/images/gallery-4.jpg',
  },
  {
    id: 'railings',
    icon: Grid3X3,
    title: 'Railings Installation',
    intro: 'Safety and style combined for steps, raised areas, and boundaries.',
    includes: [
      'Metal and glass railings',
      'Timber balustrades',
      'Handrails for steps',
      'Boundary railings',
    ],
    why: 'Essential for safety on steps and raised areas, railings also add a polished finish to your landscaping project.',
    image: '/images/gallery-6.jpg',
  },
  {
    id: 'grass',
    icon: Leaf,
    title: 'Artificial Grass Specialists',
    intro: 'Year-round green lawns without the maintenance. Perfect for families and pets.',
    includes: [
      'Full site preparation',
      'Quality artificial turf',
      'Proper drainage system',
      'Clean edging and finish',
    ],
    why: 'No mowing, no watering, no muddy paws. Our artificial grass installations look natural and last for years.',
    image: '/images/grass-large.jpg',
    link: '/artificial-grass',
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/gallery-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-wide">
          <p className="text-accent font-medium mb-3">What We Do</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            From complete garden transformations to specific installations, we deliver 
            quality craftsmanship across all aspects of landscaping.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-lg overflow-hidden shadow-card">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4 p-3 rounded-lg bg-accent text-accent-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.intro}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Why It Matters:</h3>
                    <p className="text-muted-foreground text-sm">{service.why}</p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-accent hover:bg-moss text-accent-foreground gap-2">
                      <Link to="/contact">
                        <Phone className="h-4 w-4" />
                        Request a Quote
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="gap-2">
                      <a href="https://wa.me/447772683802" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                    {service.link && (
                      <Button asChild variant="ghost" className="gap-2 text-accent">
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicesPage;
