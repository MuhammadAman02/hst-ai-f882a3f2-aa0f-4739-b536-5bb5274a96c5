import React from 'react';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StripeSetupGuide = () => {
  console.log('Rendering Stripe setup guide');
  
  return (
    <Card className="max-w-2xl mx-auto mb-8 border-orange-200 bg-orange-50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-orange-800">
          <AlertCircle className="h-5 w-5" />
          <span>Stripe Setup Required</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-orange-700">
        <p className="mb-4">
          To use real Stripe payments, you need to configure your Stripe publishable key:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Create a Stripe account at <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center">stripe.com <ExternalLink className="h-3 w-3 ml-1" /></a></li>
          <li>Get your publishable key from the Stripe dashboard</li>
          <li>Add it to your environment variables as <code className="bg-orange-100 px-1 rounded">REACT_APP_STRIPE_PUBLISHABLE_KEY</code></li>
          <li>Restart your development server</li>
        </ol>
        <p className="text-sm">
          For testing, you can use Stripe's test card numbers like <code className="bg-orange-100 px-1 rounded">4242 4242 4242 4242</code>
        </p>
      </CardContent>
    </Card>
  );
};

export default StripeSetupGuide;