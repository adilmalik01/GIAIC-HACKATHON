"use client"
import { NextPage } from 'next';
import { CheckCircle } from 'lucide-react';
import Navbar1 from '../components/navbar/Navbar1';
import Footer from '../components/footer/Footer';

type Props = object;

const Page: NextPage<Props> = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar1 title="Payment Success" />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
          <div className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h1>
            
            <p className="text-gray-600 mb-6">
              Thank you for your payment. Your transaction has been completed successfully.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => window.location.href = '/profile'}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Your Orders
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;