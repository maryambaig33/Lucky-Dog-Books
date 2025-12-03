import React, { useState } from 'react';
import { getBookRecommendations } from '../services/geminiService';
import { BookRecommendation } from '../types';
import { Sparkles, Search, Loader2, Book, ArrowRight, AlertCircle } from 'lucide-react';

const SUGGESTED_PROMPTS = [
  "A cozy mystery set in London",
  "Sci-fi like Dune but modern",
  "Best history books about Texas",
  "Heartwarming fiction for a rainy day"
];

export const AiBookseller: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<BookRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e?: React.FormEvent, overrideQuery?: string) => {
    if (e) e.preventDefault();
    const searchQuery = overrideQuery || query;
    if (!searchQuery.trim()) return;

    if (overrideQuery) setQuery(overrideQuery);

    setLoading(true);
    setHasSearched(true);
    setError(false);
    setRecommendations([]); 
    
    try {
      const results = await getBookRecommendations(searchQuery);
      if (results && results.length > 0) {
        setRecommendations(results);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-amber-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4 shadow-sm">
            <Sparkles className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">
            Digital Bookseller
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Not sure what to read next? Tell our AI-powered bookseller what you're in the mood for—be it a genre, a feeling, or similar authors—and get 3 personalized picks.
          </p>
        </div>

        <div className="mb-12 max-w-2xl mx-auto">
          <form onSubmit={(e) => handleSearch(e)} className="mb-6">
            <div className="relative shadow-md rounded-full bg-white transition-shadow focus-within:shadow-lg">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe what you want to read..."
                className="block w-full rounded-full border-2 border-transparent pl-6 pr-14 py-4 focus:border-indigo-500 focus:ring-0 text-lg bg-transparent"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </button>
            </div>
          </form>

          {!hasSearched && !loading && (
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSearch(undefined, prompt)}
                  className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center text-red-800 flex flex-col items-center">
              <AlertCircle className="h-8 w-8 mb-2 text-red-500" />
              <p className="font-medium">Oops! Our digital bookseller is having a moment.</p>
              <p className="text-sm mt-1">Please try again in a few seconds or try a different search.</p>
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="grid gap-6 md:grid-cols-3">
              {recommendations.map((book, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col group"
                >
                  <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 w-full"></div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <Book className="h-8 w-8 text-stone-200 group-hover:text-indigo-200 transition-colors" />
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-1 rounded">
                        Pick #{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-stone-900 mb-1 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-stone-500 text-sm mb-4 font-medium italic">by {book.author}</p>
                    <p className="text-stone-700 text-sm mb-6 flex-grow leading-relaxed">
                      {book.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-stone-100 bg-stone-50/50 -mx-6 -mb-6 p-6">
                      <p className="text-xs font-bold text-stone-400 uppercase mb-2 flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" /> Why this book?
                      </p>
                      <p className="text-sm text-stone-600 italic">{book.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {hasSearched && !loading && !error && recommendations.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-stone-100 shadow-sm">
              <div className="inline-block p-4 bg-stone-100 rounded-full mb-4">
                <Search className="h-8 w-8 text-stone-400" />
              </div>
              <h3 className="text-lg font-medium text-stone-900">No matches found</h3>
              <p className="text-stone-500 max-w-sm mx-auto mt-2">
                Our digital librarian couldn't find a perfect match. Try broadening your request or asking for a different genre.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};