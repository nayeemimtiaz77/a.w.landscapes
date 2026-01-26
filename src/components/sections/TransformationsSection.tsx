import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';

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
            Drag the slider to reveal the dramatic before and after of our recent projects.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {transformations.map((transformation) => (
            <div key={transformation.title} className="space-y-4">
              <BeforeAfterSlider
                beforeImage={transformation.before}
                afterImage={transformation.after}
                className="shadow-card"
              />
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {transformation.title}
                </h3>
                <p className="text-muted-foreground text-sm">{transformation.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
