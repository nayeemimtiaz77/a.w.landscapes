import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  date: string;
  review: string;
  rating?: number;
  featured?: boolean;
}

const ReviewCard = ({ name, date, review, rating = 5, featured = false }: ReviewCardProps) => {
  return (
    <div
      className={`card-premium p-6 h-full flex flex-col ${
        featured ? 'border-accent/30 bg-accent/5' : ''
      }`}
    >
      {/* Quote Icon */}
      <Quote className="h-8 w-8 text-accent/30 mb-4" />

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6">
        "{review}"
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-border">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
