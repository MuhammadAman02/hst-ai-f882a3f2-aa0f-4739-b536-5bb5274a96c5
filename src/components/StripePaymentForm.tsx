import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Lock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import stripePromise from '../lib/stripe';
import StripeSetupGuide from './StripeSetupGuide';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  console.log('Rendering Stripe CheckoutForm component');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Stripe payment form submitted');

    if (!stripe || !elements) {
      console.error('Stripe has not loaded yet');
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error('Card element not found');
      setLoading(false);
      return;
    }

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: name,
          email: email,
        },
      });

      if (error) {
        console.error('Stripe error:', error);
        toast({
          title: "Payment Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log('Payment method created successfully:', paymentMethod);
        toast({
          title: "Payment Successful!",
          description: "Your payment method has been created successfully. In a real app, this would be sent to your backend to complete the payment.",
        });
        
        // Here you would typically send the paymentMethod.id to your backend
        // to complete the payment with Stripe's API
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        fontFamily: 'system-ui, -apple-system, sans-serif',
      },
      invalid: {
        color: '#9e2146',
      },
    },
    hidePostalCode: true,
  };

  return (
    <Card className="shadow-lg border-0 bg-white">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center space-x-2 text-xl">
          <Lock className="h-5 w-5 text-green-600" />
          <span>Secure Payment with Stripe</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jenny@example.com"
              className="mt-1"
              required
            />
          </div>

          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Cardholder name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name on card"
              className="mt-1"
              required
            />
          </div>

          {/* Stripe Card Element */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-3 block">
              Card information
            </Label>
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <CardElement options={cardElementOptions} />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Test card: 4242 4242 4242 4242 | Any future date | Any 3-digit CVC
            </p>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={!stripe || loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay $29.00'}
          </Button>

          {/* Security Notice */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Lock className="h-4 w-4" />
            <span>Powered by Stripe - Your payment information is secure and encrypted</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const StripePaymentForm = () => {
  console.log('Rendering StripePaymentForm wrapper');
  
  const hasStripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY && 
                      process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY !== 'pk_test_your_key_here';
  
  return (
    <div className="max-w-2xl mx-auto">
      {!hasStripeKey && <StripeSetupGuide />}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripePaymentForm;