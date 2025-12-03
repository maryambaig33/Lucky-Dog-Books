import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Map / Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            {/* Placeholder for a map or store front image */}
            <img 
               src="https://picsum.photos/id/20/800/600" 
               alt="Store interior" 
               className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold">Visit Us in East Dallas</h3>
              <p className="opacity-90">Located near the intersection of Ferguson & Centerville</p>
            </div>
          </div>

          {/* Info Text */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Store Information</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                We are a general used bookstore with a little bit of everything. 
                With over 40 years of history, our East Dallas location is a labyrinth of stories waiting to be discovered.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-bold text-stone-900">Hours</h3>
                </div>
                <ul className="space-y-2 text-stone-600 text-sm">
                  <li className="flex justify-between">
                    <span>Mon - Sat</span>
                    <span className="font-medium">10:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">12:00 PM - 6:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-bold text-stone-900">Location</h3>
                </div>
                <address className="not-italic text-stone-600 text-sm space-y-1 mb-4">
                  10559 Ferguson Road<br/>
                  Dallas, TX 75228
                </address>
                <a 
                  href="https://maps.google.com/?q=10559+Ferguson+Road+Dallas+TX+75228" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-800 text-sm font-medium flex items-center"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};