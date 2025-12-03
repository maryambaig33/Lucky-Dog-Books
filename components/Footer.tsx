import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold font-serif mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0" />
                <span>10559 Ferguson Road<br/>Dallas, TX 75228</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0" />
                <span>(214) 327-0700</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0" />
                <a href="mailto:luckydogeast@gmail.com" className="hover:text-amber-400 transition">luckydogeast@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold font-serif mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Sat</span>
                <span className="text-white">10am - 9pm</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sunday</span>
                <span className="text-white">12pm - 6pm</span>
              </li>
            </ul>
          </div>

          {/* Social / About */}
          <div>
            <h3 className="text-white text-lg font-bold font-serif mb-4">Community</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Serving the East Dallas community with recycled books, music, and movies since 1974.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lucky Dog Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};