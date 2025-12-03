import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { TradePolicy } from './components/TradePolicy';
import { Events } from './components/Events';
import { AiBookseller } from './components/AiBookseller';
import { InfoSection } from './components/InfoSection';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case PageView.TRADE_POLICY:
        return <TradePolicy />;
      case PageView.EVENTS:
        return <Events />;
      case PageView.AI_BOOKSELLER:
        return <AiBookseller />;
      case PageView.HOME:
      default:
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <InfoSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;