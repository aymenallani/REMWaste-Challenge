import React from 'react';
import { 
  CheckCircle
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import stepsData from '../utils/constants/steps'

const Stepper = ({ currentStep }) => {
  const { isDarkMode } = useTheme();
  const steps = stepsData;

  const getStepStatus = (index) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'upcoming';
  };

  const isHoverable = (index) => {
    return index <= currentStep;
  };

  return (
    <div className={`rounded-2xl shadow-xl p-4 md:p-8 mb-8 border ${
      isDarkMode 
        ? 'bg-gray-800/80 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      {/* Mobile Vertical Layout */}
      <div className="block md:hidden">
        <div className="relative">
          {/* Vertical Progress Line */}
          <div className={`absolute left-5 top-5 w-0.5 rounded-full ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`} style={{ height: `${(steps.length - 1) * 4.5}rem` }}>
            <div 
              className={`w-full rounded-full transition-all duration-700 ease-out ${
                isDarkMode 
                  ? 'bg-gradient-to-b from-amber-500 to-amber-600' 
                  : 'bg-gradient-to-b from-blue-500 to-purple-600'
              }`}
              style={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const status = getStepStatus(index);
              const hoverable = isHoverable(index);
              const Icon = step.icon;
              
              return (
                <div key={step.id} className={`flex items-center space-x-4 group relative z-10 ${
                  !hoverable ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}>
                  {/* Step Circle */}
                  <div 
                    className={`
                      relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                      transition-all duration-500
                      ${status === 'completed' 
                        ? hoverable
                          ? `bg-gradient-to-r from-green-400 to-green-600 text-white
                             hover:shadow-lg hover:shadow-green-300 hover:scale-105`
                          : 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                        : status === 'active'
                        ? isDarkMode
                          ? `bg-gradient-to-r from-amber-500 to-amber-600 text-white animate-pulse
                             hover:shadow-lg hover:shadow-amber-300 hover:scale-105`
                          : `bg-gradient-to-r from-blue-500 to-purple-600 text-white animate-pulse
                             hover:shadow-lg hover:shadow-blue-300 hover:scale-105`
                        : isDarkMode
                          ? 'bg-gray-800 text-gray-400 border-2 border-gray-600 group-hover:border-red-500'
                          : 'bg-white text-gray-400 border-2 border-gray-200 group-hover:border-red-400'
                      }
                    `}
                  >
                    {status === 'completed' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Icon className={`w-4 h-4 ${
                        status === 'upcoming' ? 'group-hover:text-red-500 transition-colors duration-300' : ''
                      }`} />
                    )}
                    
                    {/* Ripple Effect */}
                    {status === 'active' && (
                      <div className={`absolute inset-0 rounded-full opacity-30 animate-ping ${
                        isDarkMode ? 'bg-amber-400' : 'bg-blue-400'
                      }`} />
                    )}

                    {/* Glow Effect for Active Step */}
                    {status === 'active' && (
                      <div className={`absolute top-0 w-12 h-12 rounded-full opacity-20 animate-pulse -z-10 ${
                        isDarkMode ? 'bg-amber-400' : 'bg-blue-400'
                      }`} />
                    )}
                  </div>

                  {/* Step Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`
                      font-semibold text-sm mb-1 transition-colors duration-300
                      ${status === 'completed' || status === 'active' 
                        ? hoverable
                          ? isDarkMode 
                            ? 'text-white group-hover:text-amber-200' 
                            : 'text-gray-800 group-hover:text-blue-700'
                          : isDarkMode ? 'text-white' : 'text-gray-800'
                        : isDarkMode ? 'text-gray-500 group-hover:text-red-400' : 'text-gray-500 group-hover:text-red-500'
                      }
                    `}>
                      {step.label}
                    </h3>
                    <p className={`
                      text-xs transition-colors duration-300 leading-relaxed
                      ${status === 'completed' || status === 'active' 
                        ? hoverable
                          ? isDarkMode 
                            ? 'text-gray-300 group-hover:text-amber-100' 
                            : 'text-gray-600 group-hover:text-blue-600'
                          : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        : isDarkMode ? 'text-gray-600 group-hover:text-red-400' : 'text-gray-400 group-hover:text-red-500'
                      }
                    `}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Layout */}
      <div className="hidden md:block">
        {/* Progress Bar */}
        <div className="relative mb-8">
          <div className={`absolute top-6 left-0 w-full h-1 rounded-full ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div 
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600'
              }`}
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
          
          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const status = getStepStatus(index);
              const hoverable = isHoverable(index);
              const Icon = step.icon;
              
              return (
                <div key={step.id} className={`flex flex-col items-center group ${
                  !hoverable ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}>
                  {/* Step Circle */}
                  <div 
                    className={`
                      relative w-12 h-12 rounded-full flex items-center justify-center mb-4
                      transition-all duration-500 z-10
                      ${status === 'completed' 
                        ? hoverable
                          ? `bg-gradient-to-r from-green-400 to-green-600 text-white
                             hover:shadow-xl hover:shadow-green-300 hover:scale-110 hover:from-green-500 hover:to-green-700`
                          : 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                        : status === 'active'
                        ? isDarkMode
                          ? `bg-gradient-to-r from-amber-500 to-amber-600 text-white animate-pulse
                             hover:shadow-xl hover:shadow-amber-300 hover:scale-110 hover:from-amber-600 hover:to-amber-700`
                          : `bg-gradient-to-r from-blue-500 to-purple-600 text-white animate-pulse
                             hover:shadow-xl hover:shadow-blue-300 hover:scale-110 hover:from-blue-600 hover:to-purple-700`
                        : isDarkMode
                          ? 'bg-gray-800 text-gray-400 border-2 border-gray-600 group-hover:border-red-500 group-hover:bg-red-900/20'
                          : 'bg-white text-gray-400 border-2 border-gray-200 group-hover:border-red-400 group-hover:bg-red-50'
                      }
                    `}
                  >
                    {status === 'completed' ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Icon className={`w-5 h-5 ${
                        status === 'upcoming' ? 'group-hover:text-red-500 transition-colors duration-300' : ''
                      }`} />
                    )}
                    
                    {/* Ripple Effect */}
                    {status === 'active' && (
                      <div className={`absolute inset-0 rounded-full opacity-30 animate-ping ${
                        isDarkMode ? 'bg-amber-400' : 'bg-blue-400'
                      }`} />
                    )}
                  </div>

                  {/* Step Info */}
                  <div className="text-center max-w-32">
                    <h3 className={`
                      font-semibold text-sm mb-1 transition-colors duration-300
                      ${status === 'completed' || status === 'active' 
                        ? hoverable
                          ? isDarkMode 
                            ? 'text-white group-hover:text-amber-200' 
                            : 'text-gray-800 group-hover:text-blue-700'
                          : isDarkMode ? 'text-white' : 'text-gray-800'
                        : isDarkMode ? 'text-gray-500 group-hover:text-red-400' : 'text-gray-500 group-hover:text-red-500'
                      }
                    `}>
                      {step.label}
                    </h3>
                    <p className={`
                      text-xs transition-colors duration-300
                      ${status === 'completed' || status === 'active' 
                        ? hoverable
                          ? isDarkMode 
                            ? 'text-gray-300 group-hover:text-amber-100' 
                            : 'text-gray-600 group-hover:text-blue-600'
                          : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        : isDarkMode ? 'text-gray-600 group-hover:text-red-400' : 'text-gray-400 group-hover:text-red-500'
                      }
                    `}>
                      {step.description}
                    </p>
                  </div>

                  {/* Glow Effect for Active Step */}
                  {status === 'active' && (
                    <div className={`absolute top-0 w-16 h-16 rounded-full opacity-20 animate-pulse -z-10 ${
                      isDarkMode ? 'bg-amber-400' : 'bg-blue-400'
                    }`} />
                  )}

                  {/* Enhanced Hover Glow Effect for Hoverable Steps */}
                  {hoverable && (status === 'completed' || status === 'active') && (
                    <div className={`absolute top-0 w-16 h-16 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 ${
                      status === 'completed' 
                        ? 'bg-green-400' 
                        : isDarkMode ? 'bg-amber-400' : 'bg-blue-400'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step Progress Indicator */}
      <div className="text-center mt-6 md:mt-0">
        <div className={`inline-flex items-center space-x-2 rounded-full px-3 py-2 md:px-4 ${
          isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            isDarkMode ? 'bg-amber-500' : 'bg-blue-500'
          }`} />
          <span className={`text-xs md:text-sm font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Step {currentStep + 1} of {steps.length} - {steps[currentStep].label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stepper;