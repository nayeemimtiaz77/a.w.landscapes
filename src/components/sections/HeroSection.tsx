import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/kingswood-after.jpg"
          alt="Beautiful landscaped garden by A.W Landscapes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide py-32 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white/80 text-sm">Real customer recommendations</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
            Transforming Gardens Across Bristol
            <span className="text-accent block mt-2">— Built to Last</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            15+ years experience • Artificial grass specialists • Patios • Fencing • Pergolas • Retaining walls
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Clear communication</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Hard-working team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>High quality finish</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-moss text-accent-foreground text-lg px-8 py-6 shadow-btn"
            >
              <Link to="/contact" className="gap-2">
                <Phone className="h-5 w-5" />
                Get a Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 bg-white/5 backdrop-blur-sm"
            >
              <a href="https://wa.me/447772683802" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
