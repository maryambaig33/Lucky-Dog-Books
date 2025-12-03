import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Local Author Showcase: J.D. Smith",
      date: "Oct 15, 2023",
      time: "2:00 PM - 4:00 PM",
      description: "Join us for an afternoon reading and signing with local mystery author J.D. Smith, discussing their latest novel 'Shadows of White Rock'.",
      type: "Signing"
    },
    {
      id: 2,
      title: "Kids' Storytime Saturday",
      date: "Oct 21, 2023",
      time: "10:30 AM",
      description: "Bring the little ones for a spooky (but not too spooky) Halloween themed storytime! Costumes encouraged.",
      type: "Kids"
    },
    {
      id: 3,
      title: "Monthly Book Club: 'Dune'",
      date: "Nov 02, 2023",
      time: "6:30 PM",
      description: "Our sci-fi book club tackles the classic 'Dune'. Open to all, no registration required.",
      type: "Book Club"
    }
  ];

  return (
    <div className="py-16 bg-stone-50 min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-stone-600">
            Connect with authors and fellow book lovers.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-stone-100">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase rounded-full">
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">{event.title}</h3>
              
              <div className="space-y-2 mb-4 text-sm text-stone-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Lucky Dog East Dallas
                </div>
              </div>
              
              <p className="text-stone-600 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-indigo-900 rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">Host an event?</h3>
            <p className="text-indigo-200">We love supporting local artists and writers. Contact us to schedule.</p>
          </div>
          <a href="mailto:luckydogeast@gmail.com" className="mt-6 sm:mt-0 inline-block px-6 py-3 bg-white text-indigo-900 font-bold rounded-md hover:bg-indigo-50 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};