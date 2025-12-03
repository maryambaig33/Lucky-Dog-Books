import React, { useEffect, useState } from 'react';
import { Clock, MapPin, Phone, ExternalLink, Circle } from 'lucide-react';

export const InfoSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closingSoon, setClosingSoon] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday
      const hour = now.getHours();
      
      let open = false;
      let closeTime = 0;

      if (day === 0) { // Sunday 12-6
        open = hour >= 12 && hour < 18;
        closeTime = 18;
      } else { // Mon-Sat 10-9
        open = hour >= 10 && hour < 21;
        closeTime = 21;
      }

      setIsOpen(open);
      
      // Check if closing within 1 hour
      if (open && (closeTime - hour) <= 1) {
        setClosingSoon(true);
      } else {
        setClosingSoon(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Map / Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-900/5 group">
            <img 
               src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop" 
               alt="Bookstore shelves" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="font-bold tracking-wide uppercase text-sm text-amber-400">East Dallas</span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">Visit Our Store</h3>
              <p className="text-stone-300 mb-4 max-w-md">Located near the intersection of Ferguson & Centerville. A labyrinth of stories waiting to be discovered.</p>
              
              <a 
                href="https://maps.google.com/?q=10559+Ferguson+Road+Dallas+TX+75228" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg text-sm font-medium transition-colors border border-white/20"
              >
                Open in Maps <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Info Text */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">A Local Institution</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                We are a general used bookstore with a little bit of everything. 
                With over 40 years of history, our East Dallas location is a community hub for book lovers, music enthusiasts, and collectors.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Hours Card */}
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  {isOpen ? (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${closingSoon ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}`}>
                      <Circle className={`w-2 h-2 mr-1.5 fill-current`} />
                      {closingSoon ? 'Closing Soon' : 'Open Now'}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <Circle className="w-2 h-2 mr-1.5 fill-current" />
                      Closed
                    </span>
                  )}
                </div>

                <div className="flex items-center mb-6">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-700 mr-3">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-lg">Hours</h3>
                </div>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex justify-between border-b border-stone-200 pb-2 border-dashed">
                    <span>Mon - Sat</span>
                    <span className="font-medium text-stone-900">10:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-stone-900">12:00 PM - 6:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <div className="flex items-center mb-6">
                   <div className="p-2 bg-amber-100 rounded-lg text-amber-700 mr-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-lg">Contact</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Address</p>
                    <address className="not-italic text-stone-700 font-medium">
                      10559 Ferguson Road<br/>
                      Dallas, TX 75228
                    </address>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:2143270700" className="text-stone-700 font-medium hover:text-amber-600 transition-colors">
                      (214) 327-0700
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};