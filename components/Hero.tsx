import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onNavigate: (view: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-stone-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://picsum.photos/id/24/1600/900" 
          alt="Bookshelf background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-serif">
            <span className="block">Your Community</span>
            <span className="block text-amber-500">Bookstore</span>
          </h1>
          <p className="mt-3 text-base text-stone-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl font-light">
            Recycling books, music, and movies in East Dallas since 1974. Find your next favorite story, trade in your old ones, and support local.
          </p>
          <div className="mt-8 sm:mt-10 sm:flex">
            <div className="rounded-md shadow">
              <button
                onClick={() => onNavigate(PageView.TRADE_POLICY)}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-900 bg-amber-500 hover:bg-amber-400 md:py-4 md:text-lg transition-colors"
              >
                How to Trade
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                onClick={() => onNavigate(PageView.AI_BOOKSELLER)}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-500 bg-stone-800 hover:bg-stone-700 md:py-4 md:text-lg transition-colors group"
              >
                Ask the Digital Bookseller
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};