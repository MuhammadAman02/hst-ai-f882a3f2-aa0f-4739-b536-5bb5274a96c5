import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  console.log('Rendering PricingSection component');
  
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Accept online payments',
        'Basic dashboard',
        'Email support',
        'Standard checkout',
        'Mobile optimized'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'per month',
      description: 'Advanced features for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced analytics',
        'Custom branding',
        'Priority support',
        'Subscription billing',
        'Multi-currency support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: 'per month',
      description: 'Full-featured solution for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'White-label solution'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include our core payment processing features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;