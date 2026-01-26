import { Link } from 'react-router-dom';
import { Fence, LayoutGrid, Home, Layers, Grid3X3, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    title: 'Fence & Gate Installation',
    description: 'Enhance privacy and security with our premium fencing solutions. From traditional timber to modern designs.',
    icon: Fence,
  },
  {
    title: 'Patio & Decking',
    description: 'Create stunning outdoor living spaces with expertly laid patios and beautiful timber decking.',
    icon: LayoutGrid,
  },
  {
    title: 'Pergola Design & Build',
    description: 'Add architectural interest to your garden with bespoke pergolas and outdoor structures.',
    icon: Home,
  },
  {
    title: 'Retaining Wall Installation',
    description: 'Solve drainage issues and create level spaces with professionally built retaining walls.',
    icon: Layers,
  },
  {
    title: 'Railings Installation',
    description: 'Safety and style combined with our custom railing solutions for steps and elevated areas.',
    icon: Grid3X3,
  },
  {
    title: 'Artificial Grass Specialists',
    description: 'Year-round green lawns without the maintenance. Perfect for families and pets.',
    icon: Leaf,
    link: '/artificial-grass',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From complete garden transformations to specific installations, we deliver 
            quality craftsmanship across all aspects of landscaping.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link || '/contact'}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-moss text-accent-foreground gap-2">
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
