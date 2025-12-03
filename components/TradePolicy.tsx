import React from 'react';
import { Scale, RefreshCw, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

export const TradePolicy: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-5xl">
            How Trading Works
          </h2>
          <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
            Give your books a second life. Our trade credit system makes it easy to keep your library fresh without breaking the bank.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="space-y-10 relative">
             {/* Connector Line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-stone-200 hidden sm:block"></div>

            <div className="relative flex group">
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-500 text-white font-bold text-xl shadow-lg ring-4 ring-white z-10 relative group-hover:bg-amber-600 transition-colors">
                  1
                </div>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex-grow hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-stone-900 mb-2">Bring in your items</h3>
                <p className="text-stone-600 leading-relaxed">
                  We accept books, music (CDs/LPs), and movies (DVD/Blu-Ray) at our counter. 
                  <span className="block mt-2 font-medium text-amber-700">Open for trades 7 days a week.</span>
                </p>
              </div>
            </div>

            <div className="relative flex group">
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-500 text-white font-bold text-xl shadow-lg ring-4 ring-white z-10 relative group-hover:bg-amber-600 transition-colors">
                  2
                </div>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex-grow hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-stone-900 mb-2">We evaluate</h3>
                <p className="text-stone-600 leading-relaxed">
                  Our staff sorts through your items while you browse. We select items based on <strong>condition</strong>, <strong>supply</strong>, and <strong>demand</strong>.
                </p>
              </div>
            </div>

            <div className="relative flex group">
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-500 text-white font-bold text-xl shadow-lg ring-4 ring-white z-10 relative group-hover:bg-amber-600 transition-colors">
                  3
                </div>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex-grow hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-stone-900 mb-2">Receive Credit</h3>
                <p className="text-stone-600 leading-relaxed">
                  You receive store credit for items we accept. This credit is stored digitally in our system—no cards to lose.
                </p>
              </div>
            </div>
            
             <div className="relative flex group">
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-500 text-white font-bold text-xl shadow-lg ring-4 ring-white z-10 relative group-hover:bg-amber-600 transition-colors">
                  4
                </div>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 flex-grow hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-indigo-900 mb-2">Use Your Credit</h3>
                <p className="text-indigo-800 leading-relaxed mb-3">
                  Trade credit pays for <strong>50%</strong> of your used item purchases. The remaining 50% is paid in cash/card.
                </p>
                <div className="bg-white/60 p-3 rounded-lg text-sm text-indigo-900 font-medium">
                  Example: A $10 book costs $5 in credit + $5 cash.
                </div>
              </div>
            </div>
          </div>

          {/* Guidelines Box */}
          <div className="space-y-6">
             <div className="flex items-center mb-2">
              <Scale className="h-6 w-6 text-stone-700 mr-3" />
              <h3 className="text-2xl font-bold font-serif text-stone-900">Trade Guidelines</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Accepted Card */}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <h4 className="flex items-center text-base font-bold text-emerald-800 uppercase tracking-wide mb-4">
                  <CheckCircle className="h-5 w-5 mr-2" /> Usually Accepted
                </h4>
                <ul className="space-y-3">
                  {['Recent Fiction & Non-Fiction', 'Classics in good condition', 'Sci-Fi / Fantasy', "Children's Picture Books", 'Graphic Novels / Manga', 'LPs (Vinyl Records)'].map((item, i) => (
                    <li key={i} className="flex items-start text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Declined Card */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h4 className="flex items-center text-base font-bold text-red-800 uppercase tracking-wide mb-4">
                  <AlertCircle className="h-5 w-5 mr-2" /> Usually Declined
                </h4>
                <ul className="space-y-3">
                  {['Encyclopedias', 'Magazines / Readers Digest', 'Damaged items (water, smoke, mold)', 'Outdated Textbooks', 'VHS Tapes / Cassettes'].map((item, i) => (
                    <li key={i} className="flex items-start text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start">
              <RefreshCw className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-blue-900 text-sm mb-1">Trade Only Policy</h5>
                <p className="text-blue-800 text-sm leading-snug">
                  We do not buy books for cash. We are a trade-only establishment to keep our inventory diverse and affordable for the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};