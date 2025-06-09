import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getSkipImage } from '../utils/skipImageMap';

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
        isSelected
          ? isDarkMode
            ? 'bg-gradient-to-br from-amber-600 to-amber-700 border-2 border-amber-400 shadow-xl shadow-amber-500/50'
            : 'bg-gradient-to-br from-blue-800 to-blue-900 border-2 border-blue-600 shadow-xl shadow-blue-500/50'
          : isDarkMode
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl shadow-black/50'
            : 'bg-white border border-gray-200 shadow-xl shadow-gray-200/50'
      }`}
    >
      {/* Image container with fixed dimensions */}
      <div className="w-full h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
        <img
          src={getSkipImage(skip.size)}
          alt={`Skip ${skip.size} yard`}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Size badge overlay on image */}
        <div className={`absolute top-4 left-4 px-3 py-2 rounded-lg font-bold text-sm backdrop-blur-sm ${
          isSelected
            ? isDarkMode
              ? 'bg-amber-400/90 text-gray-900'
              : 'bg-blue-400/90 text-white'
            : isDarkMode
              ? 'bg-gray-900/80 text-amber-400 border border-amber-500/50'
              : 'bg-white/80 text-blue-900 border border-blue-500/50'
        }`}>
          {skip.size} Yard
        </div>
      </div>

      {/* Decorative top border */}
      <div className={`h-1 w-full ${
        isSelected
          ? isDarkMode
            ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300'
            : 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400'
          : isDarkMode
            ? 'bg-gradient-to-r from-amber-500 via-blue-600 to-amber-500'
            : 'bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900'
      }`} />
      
      {/* Selection indicator */}
      {isSelected && (
        <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center ${
          isDarkMode ? 'bg-amber-400' : 'bg-blue-400'
        }`}>
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6">
        {/* Icon, Size, and Price Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className={`text-5xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
              {skip.icon}
            </div>
            <div>
              <div className={`text-sm font-semibold ${
                isSelected
                  ? 'text-white'
                  : isDarkMode 
                    ? 'text-amber-400' 
                    : 'text-blue-800'
              }`}>
                {skip.size} Yard Skip
              </div>
              
              {/* Hire Period Info */}
              <div className="mt-2">
                {skip.hire_period_days && (
                  <div className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    isSelected
                      ? isDarkMode
                        ? 'bg-amber-300/20 text-amber-200 border border-amber-400/30'
                        : 'bg-blue-300/20 text-blue-200 border border-blue-400/30'
                      : isDarkMode
                        ? 'bg-gray-700/30 text-gray-300 border border-gray-600/30'
                        : 'bg-gray-100/80 text-gray-600 border border-gray-300/30'
                  }`}>
                    {skip.hire_period_days} day hire period
                  </div>
                )}
              </div>
              
              {/* Reserved space for "Not Allowed On Road" Badge - always rendered */}
              <div className="mt-2 h-7 flex items-center">
                {skip.allowed_on_road === false && (
                  <div className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center space-x-1 ${
                    isSelected
                      ? isDarkMode
                        ? 'bg-red-300/20 text-red-200 border border-red-400/30'
                        : 'bg-red-300/20 text-red-200 border border-red-400/30'
                      : isDarkMode
                        ? 'bg-red-900/30 text-red-400 border border-red-500/50'
                        : 'bg-red-100/80 text-red-700 border border-red-300/50'
                  }`}>
                    <span className="text-xs">⚠️</span>
                    <span>Not Allowed On The Road</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-full text-sm font-bold ${
            isSelected
              ? isDarkMode
                ? 'bg-amber-400 text-gray-900'
                : 'bg-blue-400 text-white'
              : isDarkMode
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                : 'bg-blue-900 text-white shadow-lg shadow-blue-900/25'
          }`}>
            £{skip.price_before_vat}
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 ${
          isSelected
            ? 'text-white'
            : isDarkMode 
              ? 'text-white' 
              : 'text-gray-900'
        }`}>
          {skip.title}
        </h3>

        {/* Description */}
        <p className={`text-sm mb-4 leading-relaxed ${
          isSelected
            ? 'text-gray-100'
            : isDarkMode 
              ? 'text-gray-300' 
              : 'text-gray-600'
        }`}>
          {skip.description}
        </p>

        {/* Features List */}
        {skip.features && skip.features.length > 0 && (
          <div className="space-y-2 mb-6">
            {skip.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  isSelected
                    ? isDarkMode
                      ? 'bg-amber-300'
                      : 'bg-blue-300'
                    : isDarkMode 
                      ? 'bg-amber-500' 
                      : 'bg-blue-900'
                }`} />
                <span className={`text-sm ${
                  isSelected
                    ? 'text-gray-200'
                    : isDarkMode 
                      ? 'text-gray-400' 
                      : 'text-gray-500'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
          isSelected
            ? isDarkMode
              ? 'bg-amber-400 hover:bg-amber-300 text-gray-900'
              : 'bg-blue-400 hover:bg-blue-300 text-white'
            : isDarkMode
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40'
              : 'bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg shadow-blue-900/25 hover:shadow-blue-900/40'
        } hover:scale-105 active:scale-95`}>
          {isSelected ? 'Selected' : 'Select This Skip'}
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        isSelected
          ? isDarkMode
            ? 'bg-gradient-to-br from-amber-400/20 via-transparent to-amber-600/20'
            : 'bg-gradient-to-br from-blue-400/20 via-transparent to-blue-600/20'
          : isDarkMode
            ? 'bg-gradient-to-br from-amber-500/10 via-transparent to-blue-600/10'
            : 'bg-gradient-to-br from-blue-900/5 via-transparent to-amber-500/5'
      }`} />
    </div>
  );
};

export default SkipCard;