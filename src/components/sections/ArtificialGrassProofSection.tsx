import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageLightbox from '@/components/ui/ImageLightbox';

const grassImages = [
  { src: '/images/grass-large.jpg', alt: 'Large sandstone patio with artificial lawn' },
  { src: '/images/grass-1.jpg', alt: 'Artificial grass installation' },
  { src: '/images/grass-2.jpg', alt: 'Modern artificial lawn' },
  { src: '/images/grass-3.jpg', alt: 'Family-friendly artificial grass' },
];

const benefits = [
  'Low maintenance - no mowing or watering',
  'Year-round green, clean finish',
  'Family and pet friendly',
  'Professional installation with proper drainage',
];

const ArtificialGrassProofSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-medium mb-3">Specialists In</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Artificial Grass
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Transform your lawn with our premium artificial grass installations. 
              Perfect for busy families who want a beautiful garden without the upkeep.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-accent hover:bg-moss text-accent-foreground gap-2">
              <Link to="/artificial-grass">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Gallery */}
          <div>
            <ImageLightbox images={grassImages} columns={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtificialGrassProofSection;
