import Layout from '@/components/layout/Layout';
import { Star } from 'lucide-react';
import ReviewCard from '@/components/ui/ReviewCard';
import CTASection from '@/components/sections/CTASection';

const reviews = [
  {
    name: 'Tom Goldring Shaw',
    date: 'April 16, 2023',
    review: 'Aaron did a great job levelling and landscaping our garden. It was a tough job with tricky access and a few setbacks outside of Aaron\'s control but he worked incredibly hard to get the job finished. Communication was great and the quote reasonable & detailed. Aaron was always a friendly guy to deal with throughout & gave us good advice for other jobs we planned to do.',
  },
  {
    name: 'Lee Morgan',
    date: 'April 18, 2023',
    review: 'Anyone looking to have their garden landscaped, I could not recommend A.W Landscapes highly enough! Both Aaron and Chris who did an amazing transformation of our garden were super friendly and work extremely hard to give you the best finish. They went above and beyond and nothing was too much trouble. We couldn\'t be happier with the outcome, it\'s now a much safer and nicer place for our little one. Make sure you get A.W Landscape\'s round to quote your gardens, you won\'t be disappointed.',
  },
  {
    name: 'Suzanne Nicholas',
    date: 'June 27, 2023',
    review: 'Just had our garden transformed by Aaron and we are are so so happy with the results. Aaron is a great bloke and is very knowledgeable in the landscaping business. He has done a fabulous job the pictures speak a million words. Highly recommended.',
  },
  {
    name: 'Steve Kneller',
    date: 'July 19, 2023',
    review: 'Aaron was fantastic from start to finish. Great advice during planning, polite and easy-going during the work, as mess free as you can get and WOW the results! Would strongly recommend A W Landscapes.',
  },
  {
    name: 'Stacey Whittle',
    date: 'October 3, 2023',
    review: 'We just had 2 patios done by Aaron and his team we are very happy with the end result Aaron listened and advised through out the job and was very professional the end result was of a high standard highly recommend.',
  },
  {
    name: 'Emma Bartlett',
    date: 'July 19, 2024',
    review: 'We are absolutely in love with our new garden. From a boggy new build yard to a lush patio space, steps and artificial grass we are very pleased with the work carried out by Aaron and his team. Aaron kept us informed throughout the process and is quick to reply to messages. Thank you for creating our perfect garden to go with the perfect house.',
  },
  {
    name: 'Anthony Holden',
    date: 'July 22, 2025',
    review: 'Aaron has totally transformed our garden for us. We had an ugly retaining wall which we wanted to hide and also took the opportunity to change the design of the rest of the garden at the same time. Right from the first visit he was knowledgeable and had good ideas to best use the space, including an idea to extend the garden to get a bit more space. Importantly he also listened to our ideas and found ways to incorporate them where he could. He was enthusiastic and brought new design ideas to us so it felt like a joint project. Besides the quality of his work being high, he is really easy going and personable and nothing was too much trouble. We are so happy with what he has achieved for us and thoroughly recommend him.',
  },
  {
    name: 'Lyndsey Shellis',
    date: 'October 1, 2025',
    review: 'Aaron has completely transformed our garden, it was a huge job as everything was stripped out, ground raised and levelled. We had such bad weather at the start which made things difficult, but Aaron and his side kick Riley always turned up and did what they could. The result is absolutely stunning! We are completely over the moon with it and cannot thank Aaron and Riley enough for their hard work, attention to detail and professionalism through out the job! Aaron always went the extra mile and takes such pride in his job. The work done is incredible from a raised patio, with a beautiful gazebo, stunning raised boarders, and another huge porcelain patio, along with baton fencing to help privacy, and a lawn that just tops it all off! All finished with steps from one end of the garden to the other and decorative slate to complete the look. 100% would recommend A.W Landscapes.',
  },
  {
    name: 'Shahidul Islam',
    date: 'October 11, 2025',
    review: 'Aaron and Riley are legends. They transformed our garden and made our vision reality. Very passionate and takes pride with his work and quality is outstanding. Aaron was happy to give lots of advice. Highly recommend these guys and will hopefully be doing more projects with them.',
  },
];

const ReviewsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/emersons-after.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-wide">
          <p className="text-accent font-medium mb-3">Customer Feedback</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            What Our Clients Say
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground/80">
              5.0 rating from real customers
            </span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                date={review.date}
                review={review.review}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Every review is from a real customer. We're proud of the relationships we build 
            and the gardens we transform.
          </p>
          <div className="flex items-center justify-center gap-8 text-center">
            <div>
              <p className="font-display text-4xl font-semibold text-accent">5.0</p>
              <p className="text-muted-foreground text-sm">Average Rating</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="font-display text-4xl font-semibold text-accent">100%</p>
              <p className="text-muted-foreground text-sm">Recommend Us</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="font-display text-4xl font-semibold text-accent">15+</p>
              <p className="text-muted-foreground text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ReviewsPage;
