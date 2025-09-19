import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] md:w-[450px] p-4"
          >
            <blockquote className="bg-gray-800 rounded-lg shadow-lg p-8 h-full flex flex-col">
              <p className="text-gray-300 text-base flex-grow">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 flex items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={testimonial.src}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.designation}</p>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};
