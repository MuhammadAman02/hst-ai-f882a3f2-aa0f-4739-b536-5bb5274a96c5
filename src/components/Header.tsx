import React from 'react';
import { CreditCard, Menu } from 'lucide-react';

const Header = () => {
  console.log('Rendering Header component');
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Stripe</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Docs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-600 hover:text-gray-900 transition-colors">
              Sign in
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get started
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;