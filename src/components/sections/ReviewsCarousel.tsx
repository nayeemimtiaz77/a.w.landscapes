import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReviewCard from '@/components/ui/ReviewCard';

const reviews = [
  {
    name: 'Tom Goldring Shaw',
    date: 'April 16, 2023',
    review: 'Aaron did a great job levelling and landscaping our garden. Communication was great and the quote reasonable & detailed. Aaron was always a friendly guy to deal with throughout & gave us good advice for other jobs we planned to do.',
  },
  {
    name: 'Lee Morgan',
    date: 'April 18, 2023',
    review: 'I could not recommend A.W Landscapes highly enough! Both Aaron and Chris did an amazing transformation of our garden. They went above and beyond and nothing was too much trouble. We couldn\'t be happier with the outcome.',
  },
  {
    name: 'Steve Kneller',
    date: 'July 19, 2023',
    review: 'Aaron was fantastic from start to finish. Great advice during planning, polite and easy-going during the work, as mess free as you can get and WOW the results! Would strongly recommend A W Landscapes.',
  },
  {
    name: 'Emma Bartlett',
    date: 'July 19, 2024',
    review: 'We are absolutely in love with our new garden. From a boggy new build yard to a lush patio space, steps and artificial grass we are very pleased with the work carried out by Aaron and his team.',
  },
  {
    name: 'Shahidul Islam',
    date: 'October 11, 2025',
    review: 'Aaron and Riley are legends. They transformed our garden and made our vision reality. Very passionate and takes pride with his work and quality is outstanding.',
  },
];

const ReviewsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-accent font-medium mb-3">Customer Feedback</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border transition-colors ${
                canScrollLeft
                  ? 'border-border hover:bg-muted'
                  : 'border-muted text-muted cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border transition-colors ${
                canScrollRight
                  ? 'border-border hover:bg-muted'
                  : 'border-muted text-muted cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex-shrink-0 w-[320px] sm:w-[350px] snap-start"
            >
              <ReviewCard
                name={review.name}
                date={review.date}
                review={review.review}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/reviews">
              Read All Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
