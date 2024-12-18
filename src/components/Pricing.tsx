import React from "react";
import { Button } from "./ui/button";

const PricingSection = () => {
  return (
    <div className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Heading Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Basic</h3>
              <p className="text-gray-500 mb-6 dark:text-gray-300">
                Perfect for starters
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold dark:text-white">$29</span>
                <span className="text-gray-500 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-6 space-y-4">
                {["5 Projects", "2GB Storage", "Basic Support"].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full py-3 px-4 dark:bg-white/80 dark:hover:bg-white/70 dark:text-black text-white font-semibold rounded-lg transition duration-200">
                Get Started
              </Button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform scale-105 z-10 border-2 border-black dark:border-white">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Pro</h3>
              <p className="text-gray-500 mb-6 dark:text-gray-300">
                Most Popular Choice
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold dark:text-white">$79</span>
                <span className="text-gray-500 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-6 space-y-4">
                {["15 Projects", "10GB Storage", "Priority Support", "Advanced Features"].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full py-3 px-4 dark:bg-white/80 dark:hover:bg-white/70 dark:text-black text-white font-semibold rounded-lg transition duration-200">
                Get Started
              </Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Enterprise</h3>
              <p className="text-gray-500 mb-6 dark:text-gray-300">
                For large teams
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold dark:text-white">$199</span>
                <span className="text-gray-500 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-6 space-y-4">
                {["Unlimited Projects", "100GB Storage", "24/7 Support", "Custom Features"].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full py-3 px-4 dark:bg-white/80 dark:hover:bg-white/70 dark:text-black text-white font-semibold rounded-lg transition duration-200">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;