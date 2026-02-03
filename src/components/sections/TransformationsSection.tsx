import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const transformations = [
  {
    title: 'Cribbs Causeway',
    description: 'Privacy enhancement with a fully usable garden transformation',
    before: '/images/cribbs-before.jpg',
    after: '/images/cribbs-after.jpg',
  },
  {
    title: 'Kingswood',
    description: 'Complete garden redesign from concept to reality',
    before: '/images/kingswood-before.jpg',
    after: '/images/kingswood-after.jpg',
  },
  {
    title: 'Emersons Green',
    description: 'Artificial grass and patio upgrade for a modern finish',
    before: '/images/emersons-before.jpg',
    after: '/images/emersons-after.jpg',
  },
  {
    title: 'Driveway & Gates',
    description: 'Bespoke driveway transformation with custom gates',
    before: '/images/driveway-before.jpg',
    after: '/images/driveway-after.jpg',
  },
];

const TransformationsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3">See The Difference</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Featured Transformations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the dramatic before and after of our recent projects.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="space-y-12">
          {transformations.map((transformation) => (
            <div key={transformation.title} className="bg-white p-6 rounded-xl shadow-card">
              <div className="mb-4">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {transformation.title}
                </h3>
                <p className="text-muted-foreground text-sm">{transformation.description}</p>
              </div>
              
              {/* Side-by-side display of before and after */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={transformation.before}
                    alt={`Before: ${transformation.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
                
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={transformation.after}
                    alt={`After: ${transformation.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            For more inspiration check out our Facebook & Instagram pages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://www.facebook.com/AWLandscape" target="_blank" rel="noopener noreferrer">
                Facebook
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://www.instagram.com/a.w.landscapes_" target="_blank" rel="noopener noreferrer">
                Instagram
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;