import React from 'react';
import { Scale, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';

export const TradePolicy: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">
            How Trading Works
          </h2>
          <p className="mt-4 text-xl text-stone-600">
            Turn your pre-loved books into new adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 font-bold text-lg">
                  1
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-stone-900">Bring in your items</h3>
                <p className="mt-2 text-stone-600">
                  Bring your books, music (CDs/LPs), or movies (DVD/Blu-Ray) to our counter. We are open for trades 7 days a week.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 font-bold text-lg">
                  2
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-stone-900">We evaluate</h3>
                <p className="mt-2 text-stone-600">
                  Our staff will sort through your items. We select items based on condition, supply, and demand.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 font-bold text-lg">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-stone-900">Receive Credit</h3>
                <p className="mt-2 text-stone-600">
                  You receive store credit for items we accept. This credit is stored in our digital system under your name.
                </p>
              </div>
            </div>
            
             <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 font-bold text-lg">
                  4
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-stone-900">Use Your Credit</h3>
                <p className="mt-2 text-stone-600">
                  Your trade credit covers 50% of your used book purchase. The other 50% is paid in cash/card.
                  <br/><span className="text-sm italic text-stone-500 mt-1 block">Example: A $10 book costs you $5 in credit + $5 cash.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Guidelines Box */}
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="flex items-center mb-6">
              <Scale className="h-6 w-6 text-stone-700 mr-2" />
              <h3 className="text-xl font-bold font-serif text-stone-900">What We Accept</h3>
            </div>
            
            <div className="space-y-4">
               <div>
                <h4 className="flex items-center text-sm font-bold text-emerald-700 uppercase tracking-wide mb-2">
                  <CheckCircle className="h-4 w-4 mr-2" /> Usually Accepted
                </h4>
                <ul className="list-disc list-inside text-stone-600 text-sm space-y-1 ml-1">
                  <li>Recent Fiction & Non-Fiction</li>
                  <li>Classics in good condition</li>
                  <li>Sci-Fi / Fantasy</li>
                  <li>Children's Picture Books</li>
                  <li>Graphic Novels / Manga</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <h4 className="flex items-center text-sm font-bold text-red-700 uppercase tracking-wide mb-2">
                  <AlertCircle className="h-4 w-4 mr-2" /> Usually Declined
                </h4>
                <ul className="list-disc list-inside text-stone-600 text-sm space-y-1 ml-1">
                  <li>Encyclopedias</li>
                  <li>Magazines / Readers Digest</li>
                  <li>Damaged items (water, smoke, mold)</li>
                  <li>Outdated Textbooks</li>
                  <li>VHS Tapes / Cassettes</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-stone-200">
              <div className="flex items-start p-3 bg-blue-50 rounded-lg text-blue-900 text-sm">
                <RefreshCw className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <p>We do not buy books for cash. We are a trade-only establishment to keep our inventory diverse and affordable for the community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};