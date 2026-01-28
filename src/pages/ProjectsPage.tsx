import Layout from '@/components/layout/Layout';
import { MapPin } from 'lucide-react';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import ImageLightbox from '@/components/ui/ImageLightbox';
import CTASection from '@/components/sections/CTASection';

const featuredProjects = [
  {
    title: 'Thornbury Patio Replacement',
    location: 'Thornbury',
    description: 'Complete patio replacement with porcelain tiles and new borders.',
    images: [
      { src: '/images/thornbury-1.jpg', alt: 'Thornbury patio project' },
      { src: '/images/thornbury-2.jpg', alt: 'Thornbury patio detail' },
      { src: '/images/thornbury-3.jpg', alt: 'Thornbury patio complete' },
    ],
  },
  {
    title: 'Banwell Pergola & Privacy Fencing',
    location: 'Banwell',
    description: 'Bespoke pergola with integrated privacy fencing for a stunning outdoor room.',
    images: [
      { src: '/images/banwell-pergola.jpg', alt: 'Banwell pergola and fencing' },
    ],
  },
];

const beforeAfterProjects = [
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

const galleryImages = [
  { src: '/images/1.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/2.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/3.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/4.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/5.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/6.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/7.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/8.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/9.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/10.jpeg', alt: 'A.W Landscapes project' },
  { src: '/images/gallery-2.jpg', alt: 'Garden transformation' },
  { src: '/images/gallery-3.jpg', alt: 'Landscaping work' },
  { src: '/images/gallery-4.jpg', alt: 'Outdoor project' },
  { src: '/images/gallery-5.jpg', alt: 'Garden design' },
  { src: '/images/gallery-6.jpg', alt: 'Landscape project' },
  { src: '/images/gallery-7.jpg', alt: 'Bristol landscaping' },
  { src: '/images/gallery-1.jpg', alt: 'A.W Landscapes project' },
];

const ProjectsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/thornbury-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-wide">
          <p className="text-accent font-medium mb-3">Our Work</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Projects Gallery
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Browse our portfolio of garden transformations across Bristol and surrounding areas.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project) => (
              <div key={project.title} className="card-premium p-8">
                <div className="flex items-center gap-2 text-accent mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className={`grid gap-4 ${project.images.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 sm:grid-cols-3'}`}>
                  {project.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="w-full aspect-[4/3] object-cover rounded-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Before & After
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Drag the slider to see the dramatic transformations we've achieved for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project) => (
              <div key={project.title} className="space-y-4">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  className="shadow-card"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Project Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click any image to view it larger.
            </p>
          </div>

          <ImageLightbox images={galleryImages} columns={4} />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ProjectsPage;
