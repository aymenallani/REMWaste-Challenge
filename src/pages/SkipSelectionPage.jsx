import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useGetSkipsByLocationQuery } from '../store/api/skipsApi';
import { useTheme } from '../contexts/ThemeContext';
import SkipCard from '../components/SkipCard';
import Stepper from '../components/Stepper';
import SkipSelectionFooter from '../components/SkipSelectionFooter';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/animations.css';

const SkipSelectionPage = () => {
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const { isDarkMode } = useTheme();

  const {
    data: skips = [],
    isLoading: loading,
    isError,
    error,
    refetch
  } = useGetSkipsByLocationQuery({
    postcode: 'NR32',
    area: 'Lowestoft'
  });

  const handleSkipSelection = (skipId) => {
    setSelectedSkipId(selectedSkipId === skipId ? null : skipId);
  };

  const handleContinue = () => {
    if (selectedSkipId) {
      console.log('Continuing with skip:', selectedSkipId);
    }
  };

  const selectedSkip = skips.find(skip => skip.id === selectedSkipId);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-white'
    }`}>
      <div className="container mx-auto px-6 py-12">
        <Stepper currentStep={2}/>
        
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 transform animate-fade-in-up ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="inline-block animate-bounce-subtle">Choose Your Skip Size</span>
          </h1>
          <p className={`text-lg md:text-xl transition-all duration-700 delay-300 transform animate-fade-in-up ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <span className="inline-block animate-pulse-subtle">Select the skip size that best suits your needs</span>
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className={`w-12 h-12 animate-spin mb-4 ${
              isDarkMode ? 'text-amber-500' : 'text-blue-900'
            }`} />
            <p className={`text-center text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Loading available skips...
            </p>
          </div>
        ) : isError ? (
          <div className="text-center py-20">
            <p className={`text-lg mb-4 ${
              isDarkMode ? 'text-red-400' : 'text-red-600'
            }`}>
              Error loading skips: {error?.message || 'Something went wrong'}
            </p>
            <button 
              onClick={() => refetch()}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isDarkMode
                  ? 'bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-blue-900 hover:bg-blue-800 text-white shadow-lg shadow-blue-900/25'
              } hover:scale-105`}
            >
              Try Again
            </button>
          </div>
        ) : skips.length === 0 ? (
          <div className="text-center py-20">
            <p className={`text-lg mb-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              No skips available for your location at the moment.
            </p>
            <button 
              onClick={() => refetch()}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isDarkMode
                  ? 'bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-blue-900 hover:bg-blue-800 text-white shadow-lg shadow-blue-900/25'
              } hover:scale-105`}
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-in-up delay-500">
              {skips.map((skip, index) => (
                <div 
                  key={skip.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <SkipCard 
                    skip={skip} 
                    isSelected={selectedSkipId === skip.id}
                    onSelect={() => handleSkipSelection(skip.id)}
                  />
                </div>
              ))}
            </div>

            {selectedSkipId && <div className="h-24"></div>}
          </>
        )}
      </div>

      <SkipSelectionFooter 
        selectedSkipId={selectedSkipId}
        onContinue={handleContinue}
        skipDetails={selectedSkip}
      />
    </div>
  );
};

export default SkipSelectionPage;