import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

const PricingCard = ({ name, price, period, description, features, popular }: PricingCardProps) => {
  console.log('Rendering PricingCard for plan:', name);
  
  return (
    <Card className={`relative ${popular ? 'border-blue-500 border-2 shadow-lg scale-105' : 'border-gray-200'} transition-all duration-200 hover:shadow-lg`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} transition-colors`}
        >
          Get started
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;