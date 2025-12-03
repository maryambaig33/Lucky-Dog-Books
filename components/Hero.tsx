import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onNavigate: (view: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-stone-900 overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1507842217343-583bb726ccbe?q=80&w=2000&auto=format&fit=crop" 
          alt="Cozy bookstore interior with shelves of books"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-serif leading-tight">
            <span className="block">Your Community</span>
            <span className="block text-amber-500">Bookstore</span>
          </h1>
          <p className="mt-6 text-base text-stone-200 sm:text-lg sm:max-w-xl md:text-xl font-light leading-relaxed">
            Recycling books, music, and movies in East Dallas since 1974. Find your next favorite story, trade in your old ones, and experience the joy of discovery.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate(PageView.TRADE_POLICY)}
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-900 bg-amber-500 hover:bg-amber-400 md:py-4 md:text-lg transition-colors shadow-lg shadow-amber-900/20"
            >
              How to Trade
            </button>
            <button
              onClick={() => onNavigate(PageView.AI_BOOKSELLER)}
              className="flex items-center justify-center px-8 py-3 border border-stone-500 text-base font-medium rounded-md text-white bg-stone-800/50 hover:bg-stone-700 md:py-4 md:text-lg transition-colors backdrop-blur-sm group"
            >
              Ask the Digital Bookseller
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-amber-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};