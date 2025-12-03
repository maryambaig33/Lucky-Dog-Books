import React, { useState } from 'react';
import { PageView, NavItem } from '../types';
import { Menu, X, BookOpen } from 'lucide-react';

interface NavigationProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', view: PageView.HOME },
  { label: 'Trade Policy', view: PageView.TRADE_POLICY },
  { label: 'Events', view: PageView.EVENTS },
  { label: 'AI Bookseller', view: PageView.AI_BOOKSELLER },
];

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-stone-900 text-stone-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick(PageView.HOME)}>
            <BookOpen className="h-8 w-8 text-amber-500 mr-2" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-amber-50 leading-none">Lucky Dog</span>
              <span className="text-xs uppercase tracking-widest text-stone-400">Books • East Dallas</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentView === item.view
                      ? 'bg-stone-800 text-amber-400'
                      : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-stone-800 inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === item.view
                    ? 'bg-stone-800 text-amber-400'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};