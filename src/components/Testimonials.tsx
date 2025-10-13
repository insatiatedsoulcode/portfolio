"use client";

import dynamic from "next/dynamic";
import { Star, Quote } from "lucide-react";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    company: "TechCorp Solutions",
    content: "Deepak delivered an exceptional Java microservices architecture that improved our system performance by 40%. His expertise in Spring Boot and AWS is outstanding.",
    rating: 5,
    project: "Enterprise Microservices Migration",
    image: "👩‍💼"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Working with Deepak was a game-changer for our AI project. He seamlessly integrated machine learning models with our existing React frontend. Highly recommended!",
    rating: 5,
    project: "AI-Powered Web Application",
    image: "👨‍💻"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "StartupXYZ",
    content: "Deepak's full-stack development skills are impressive. He built our entire platform from scratch using modern technologies. Professional, reliable, and delivers on time.",
    rating: 5,
    project: "Full-Stack Web Platform",
    image: "👩‍🚀"
  },
  {
    id: 4,
    name: "David Kumar",
    role: "Senior Developer",
    company: "GovTech Solutions",
    content: "Deepak's expertise in government project compliance and Java development is exceptional. He ensured 100% compliance with all regulatory requirements.",
    rating: 5,
    project: "Government Portal Development",
    image: "👨‍💼"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="professional-section">
      <div className="container mx-auto px-6">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 text-white mb-6">
            Client <span className="text-blue-400">Testimonials</span>
          </h2>
          <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
            What clients say about working with me. Real feedback from real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="professional-card p-6 hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <Quote className="w-8 h-8 text-purple-400 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                "{testimonial.content}"
              </p>

              {/* Project */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="text-center">
                <div className="text-2xl mb-2">{testimonial.image}</div>
                <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs">{testimonial.role}</p>
                <p className="text-purple-300 text-xs font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">5.0</div>
            <div className="text-gray-300 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
