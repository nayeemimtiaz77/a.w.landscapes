import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  image?: string;
}

const ServiceCard = ({ title, description, icon: Icon, link = '/contact', image }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group card-premium p-6 flex flex-col hover-lift transition-all duration-300"
    >
      {image && (
        <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      <div className="flex items-center gap-2 text-accent font-medium text-sm">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ServiceCard;
