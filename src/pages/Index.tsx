import React from 'react';
import Header from '../components/Header';
import StripePaymentForm from '../components/StripePaymentForm';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const Index = () => {
  console.log('Rendering Stripe-inspired payment page with real Stripe integration');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Accept payments
            <span className="block text-blue-200">anywhere</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Build a payments experience that delights your customers and grows your business with Stripe.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
            Start now
          </button>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Try our Stripe-powered payment form
            </h2>
            <p className="text-lg text-gray-600">
              Experience the smooth checkout process powered by Stripe's secure payment infrastructure
            </p>
          </div>
          <StripePaymentForm />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      <Footer />
    </div>
  );
};

export default Index;