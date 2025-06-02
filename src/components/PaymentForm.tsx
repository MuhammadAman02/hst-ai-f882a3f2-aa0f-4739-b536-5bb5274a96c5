import React, { useState } from 'react';
import { CreditCard, Lock, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    name: '',
    country: 'United States'
  });

  console.log('Rendering PaymentForm component', formData);

  const handleInputChange = (field: string, value: string) => {
    console.log(`Updating ${field} to:`, value);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment form submitted with data:', formData);
    alert('Payment form submitted! (This is a demo)');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg border-0 bg-white">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-2 text-xl">
            <Lock className="h-5 w-5 text-green-600" />
            <span>Secure Payment</span>
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
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="jenny@example.com"
                className="mt-1"
                required
              />
            </div>

            {/* Card Information */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-3 block">
                Card information
              </Label>
              
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="relative">
                  <Input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    placeholder="1234 1234 1234 1234"
                    className="border-0 border-b border-gray-300 rounded-none focus:ring-0"
                    maxLength={19}
                    required
                  />
                  <CreditCard className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
                
                <div className="flex">
                  <div className="flex-1 relative">
                    <Input
                      type="text"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      placeholder="MM / YY"
                      className="border-0 border-r border-gray-300 rounded-none focus:ring-0"
                      maxLength={7}
                      required
                    />
                    <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                  
                  <div className="flex-1">
                    <Input
                      type="text"
                      value={formData.cvc}
                      onChange={(e) => handleInputChange('cvc', e.target.value)}
                      placeholder="CVC"
                      className="border-0 rounded-none focus:ring-0"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Cardholder Name */}
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Cardholder name
              </Label>
              <div className="relative mt-1">
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Full name on card"
                  required
                />
                <User className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Country */}
            <div>
              <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                Country or region
              </Label>
              <select
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>France</option>
              </select>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
            >
              Pay $29.00
            </Button>

            {/* Security Notice */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Lock className="h-4 w-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentForm;