import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showBackground?: boolean;
}

const CTASection = ({
  title = "Ready to Transform Your Garden?",
  subtitle = "Get in touch for a free, no-obligation quote. We'd love to hear about your project.",
  showBackground = true,
}: CTASectionProps) => {
  return (
    <section
      className={`section-padding-sm ${
        showBackground
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-foreground'
      }`}
    >
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
          {title}
        </h2>
        <p
          className={`max-w-xl mx-auto mb-8 ${
            showBackground ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-moss text-accent-foreground gap-2"
          >
            <Link to="/contact">
              <Phone className="h-5 w-5" />
              Get a Free Quote
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className={
              showBackground
                ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent'
                : 'border-border'
            }
          >
            <a href="https://wa.me/447772683802" target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
