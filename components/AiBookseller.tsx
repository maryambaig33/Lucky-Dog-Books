import React, { useState } from 'react';
import { getBookRecommendations } from '../services/geminiService';
import { BookRecommendation } from '../types';
import { Sparkles, Search, Loader2, Book } from 'lucide-react';

export const AiBookseller: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<BookRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);
    setRecommendations([]); // Clear previous
    
    try {
      const results = await getBookRecommendations(query);
      setRecommendations(results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-amber-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">
            Digital Bookseller
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            Not sure what to read next? Tell our AI-powered bookseller what you're in the mood for—be it a genre, a feeling, or similar authors—and get 3 personalized picks.
          </p>
        </div>

        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative shadow-sm rounded-md max-w-2xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., 'A cozy mystery set in London' or 'Sci-fi like Dune'"
              className="block w-full rounded-full border-stone-300 pl-6 pr-14 py-4 focus:border-indigo-500 focus:ring-indigo-500 text-lg shadow-sm"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 aspect-square bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </button>
          </div>
        </form>

        <div className="space-y-6">
          {recommendations.length > 0 && (
            <div className="grid gap-6 md:grid-cols-3">
              {recommendations.map((book, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col"
                >
                  <div className="h-3 bg-indigo-500 w-full"></div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <Book className="h-8 w-8 text-stone-300" />
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                        Pick #{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-stone-900 mb-1 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-stone-500 text-sm mb-4 font-medium italic">by {book.author}</p>
                    <p className="text-stone-700 text-sm mb-4 flex-grow leading-relaxed">
                      {book.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-stone-100">
                      <p className="text-xs font-semibold text-stone-400 uppercase mb-1">Why this book?</p>
                      <p className="text-sm text-stone-600">{book.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {hasSearched && !loading && recommendations.length === 0 && (
            <div className="text-center text-stone-500 py-12">
              <p>No recommendations found right now. Try a different prompt!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};