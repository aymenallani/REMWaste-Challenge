import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SkipSelectionFooter = ({ 
  selectedSkipId, 
  onContinue,
  onBack,
  skipDetails
}) => {
  const { isDarkMode } = useTheme();
  
  if (!selectedSkipId) return null;

  return (
    <div className={`sticky bottom-0 left-0 right-0 z-50 border-t backdrop-blur-lg transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900/90 border-gray-700' 
        : 'bg-white/90 border-gray-200'
    }`}>
      {/* Disclaimer */}
      <div className={`text-center py-2 text-xs border-b ${
        isDarkMode 
          ? 'text-gray-400 border-gray-700 bg-gray-800/50' 
          : 'text-gray-500 border-gray-200 bg-gray-50/50'
      }`}>
        <p>
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, 
          colours may vary, options and/or accessories may be featured at additional cost.
        </p>
      </div>
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Selected Skip Summary */}
          <div className={`flex items-center gap-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <div className={`w-3 h-3 rounded-full ${
              isDarkMode ? 'bg-amber-500' : 'bg-blue-500'
            } animate-pulse`}></div>
            
            <div>
              <h3 className={`font-bold text-xl ${
                isDarkMode ? 'text-amber-400' : 'text-blue-900'
              }`}>
                £{skipDetails?.price_before_vat}
              </h3>
              <div className={`flex items-center gap-4 text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="font-medium">{skipDetails?.size} Yard Skip</span>
                <span>•</span>
                <span>{skipDetails?.hire_period_days} day hire</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Back Button */}
            <button 
              onClick={onBack}
              className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50'
              } hover:scale-105 active:scale-95 flex items-center gap-2`}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              Back
            </button>

            {/* Continue Button */}
            <button 
              onClick={onContinue}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-xl shadow-amber-500/25'
                  : 'bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white shadow-xl shadow-blue-900/25'
              } hover:scale-105 active:scale-95 flex items-center gap-2`}
            >
              Continue
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionFooter;