import Layout from '@/components/layout/Layout';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const values = [
  {
    icon: Users,
    title: 'Friendly, Clear Communication',
    description: 'We keep you informed every step of the way, from initial consultation to final walkthrough.',
  },
  {
    icon: Award,
    title: 'Reliable and Hardworking',
    description: 'Rain or shine, we turn up and work until the job is done right.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Finish',
    description: 'We take pride in every detail, ensuring a premium finish that lasts.',
  },
  {
    icon: Heart,
    title: 'Respectful on Site',
    description: 'We treat your property with care and leave it clean and tidy.',
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/grass-large.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-wide">
          <p className="text-accent font-medium mb-3">About Us</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Building Beautiful Gardens<br />
            <span className="text-accent">Since 2009</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Led by Aaron, A.W Landscapes brings over 15 years of experience to every project.
            We're passionate about transforming outdoor spaces into areas you'll love.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/thornbury-1.jpg"
                  alt="A.W Landscapes project"
                  className="rounded-lg shadow-card w-full aspect-square object-cover"
                />
                <img
                  src="/images/banwell-pergola.jpg"
                  alt="Pergola installation"
                  className="rounded-lg shadow-card w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="pt-8 space-y-4">
                <img
                  src="/images/kingswood-after.jpg"
                  alt="Garden transformation"
                  className="rounded-lg shadow-card w-full aspect-[4/3] object-cover"
                />
                <img
                  src="/images/emersons-after.jpg"
                  alt="Artificial grass project"
                  className="rounded-lg shadow-card w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                Local Bristol Experts
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Based in Bristol (BS11), we've been serving homeowners across the city and 
                  surrounding areas for over 15 years. Our team takes immense pride in every 
                  project, treating each garden as if it were our own.
                </p>
                <p className="mb-4">
                  What sets us apart is our focus on quality, communication, and advice. 
                  We don't just build gardens – we help you design outdoor spaces that 
                  work for your lifestyle, whether that's a safe play area for children, 
                  a low-maintenance retreat, or an entertaining space.
                </p>
                <p>
                  From the first visit, Aaron brings knowledge and ideas to best use your 
                  space. We listen to your vision and find ways to make it reality, often 
                  suggesting improvements you might not have considered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              Why Homeowners Choose A.W Landscapes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-4xl sm:text-5xl font-semibold text-accent mb-2">15+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-semibold text-accent mb-2">500+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-semibold text-accent mb-2">5.0</p>
              <p className="text-muted-foreground">Star Rating</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-semibold text-accent mb-2">100%</p>
              <p className="text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default AboutPage;
