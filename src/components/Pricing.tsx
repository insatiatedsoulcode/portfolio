"use client";

import { motion } from "framer-motion";
import { Check, Clock, Users, Zap, Star } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    name: "Consultation",
    price: "$50",
    duration: "per hour",
    description: "Perfect for quick advice and technical guidance",
    features: [
      "Technical consultation",
      "Architecture review",
      "Code review",
      "Best practices guidance",
      "1-hour session"
    ],
    popular: false,
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Project Development",
    price: "$75",
    duration: "per hour",
    description: "Full-stack development and implementation",
    features: [
      "Full-stack development",
      "Database design",
      "API development",
      "Frontend implementation",
      "Testing & deployment",
      "Ongoing support"
    ],
    popular: true,
    icon: Zap,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Enterprise Solution",
    price: "Custom",
    duration: "project-based",
    description: "Large-scale enterprise applications",
    features: [
      "Enterprise architecture",
      "Microservices design",
      "DevOps implementation",
      "Team leadership",
      "Documentation",
      "Training & support",
      "Maintenance agreement"
    ],
    popular: false,
    icon: Star,
    color: "from-green-500 to-emerald-500"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Service <span className="text-purple-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for all types of projects. Choose the plan that fits your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? "border-purple-500/50 ring-2 ring-purple-500/20" 
                    : "border-white/20 hover:border-purple-500/50"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Plan Name & Description */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                  onClick={() => {
                    // Scroll to contact section
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose My Services?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Fast Delivery</h4>
                <p className="text-gray-300 text-sm">Projects delivered on time with quality code</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">5-Star Quality</h4>
                <p className="text-gray-300 text-sm">Consistent high-quality work and client satisfaction</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Expert Support</h4>
                <p className="text-gray-300 text-sm">Ongoing support and maintenance included</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
