import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Parallax } from "react-scroll-parallax";

interface TestimonialsProps {
  // Add any props if needed
}

const Testimonials: React.FC<TestimonialsProps> = () => {
  const testimonials = [
    {
      quote:
        "Bedrock PMO transformed our project management capabilities. Their expertise and guidance helped us deliver a complex infrastructure project on time and under budget.",
      name: "Lucin McPherson",
      title: "CEO, McPherson Development",
    },
    {
      quote:
        "Working with Bedrock PMO has been a game-changer for our organization. Their structured approach and attention to detail have significantly improved our project success rate.",
      name: "Michael Chen",
      title: "Director of Operations, Innovate Construction",
    },
    {
      quote:
        "The team at Bedrock PMO provided invaluable support during a critical system implementation. Their expertise and commitment to excellence ensured a smooth transition with minimal disruption.",
      name: "Fernando Rodriguez",
      title: "VP of Technology, FinServe Inc.",
    },
  ];

  return (
    <div id="testimonials" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Parallax translateY={[10, -10]} opacity={[0.8, 1]}>
          <div className="lg:text-center">
            <span className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              TESTIMONIALS
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Don't just take our word for it - hear from some of our satisfied
              clients
            </p>
          </div>
        </Parallax>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Parallax
              key={index}
              translateY={[30, -30]}
              opacity={[0.6, 1]}
              scale={[0.85, 1]}
              easing="easeInOutCubic"
              startScroll={100 * index}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            </Parallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
