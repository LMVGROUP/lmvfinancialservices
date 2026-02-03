import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    location: 'Mumbai',
    content: 'LMV Financial helped me secure a business loan when other banks turned me down. Their personalized approach and quick processing made all the difference. Highly recommend their services!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'IT Professional',
    location: 'Bangalore',
    content: 'I have been investing through LMV for 5 years now. Their mutual fund recommendations have consistently outperformed the market. The team is knowledgeable and always available.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Retired Government Officer',
    location: 'Delhi',
    content: 'The retirement planning service from LMV gave me peace of mind. They understood my needs and created a portfolio that provides steady income while preserving my capital.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    role: 'Doctor',
    location: 'Hyderabad',
    content: 'Excellent insurance advice! LMV helped me choose the right health and life insurance policies for my family. Their claim support is outstanding.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with LMV Financial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{currentTestimonial.content}"
              </p>
              
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-muted'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div>
                <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial.role}, {currentTestimonial.location}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-primary/20'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
