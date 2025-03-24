
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah K.",
    role: "Graphic Designer",
    content: "Sketch Artist GPT transformed my rough concept into a beautiful sketch that perfectly captured my vision. The quality was impressive and saved me hours of work!",
    rating: 5
  },
  {
    name: "Michael T.",
    role: "Illustrator",
    content: "I've tried many AI art tools, but Sketch Artist GPT really stands out for sketch creation. The attention to detail is remarkable, and the conversion process is seamless.",
    rating: 5
  },
  {
    name: "David L.",
    role: "Art Student",
    content: "As someone learning to draw, this tool has been invaluable for studying different sketching techniques. I upload reference photos and analyze how the AI creates sketches from them.",
    rating: 4
  },
  {
    name: "Jennifer M.",
    role: "Author",
    content: "I needed illustrations for my children's book and Sketch Artist GPT delivered beautiful sketches based on my descriptions. The process was easy and the results exceeded my expectations.",
    rating: 5
  },
  {
    name: "Robert C.",
    role: "Game Developer",
    content: "We use Sketch Artist GPT for conceptualizing game characters. It's fast, reliable, and the high-resolution outputs work perfectly for our creative process.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-cyber-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="cyber-gradient-text">What Our Users Say</span>
          </h2>
          <p className="text-white/70 text-lg">
            Read testimonials from artists, designers, and creators who use Sketch Artist GPT
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop version */}
          <div 
            className="hidden md:block relative overflow-hidden"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="cyber-card p-8 h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-white/60 text-sm">{testimonial.role}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-cyber-yellow fill-cyber-yellow" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i + testimonial.rating} className="h-5 w-5 text-white/20" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/80 italic">{`"${testimonial.content}"`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile version - show one at a time */}
          <div className="block md:hidden">
            <div className="cyber-card p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonials[activeIndex].name}</h3>
                  <p className="text-white/60 text-sm">{testimonials[activeIndex].role}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-cyber-yellow fill-cyber-yellow" />
                  ))}
                  {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[activeIndex].rating} className="h-4 w-4 text-white/20" />
                  ))}
                </div>
              </div>
              <p className="text-white/80 italic">{`"${testimonials[activeIndex].content}"`}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-cyber-purple/30 hover:bg-cyber-purple/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-cyber-purple" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-cyber-purple' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-cyber-purple/30 hover:bg-cyber-purple/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-cyber-purple" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
