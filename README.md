# Skip Selection Page Redesign

This modern, responsive React application improves the "Choose Your Skip Size" page for WeWantWaste, with a focus on clean code, user-friendly design, and smooth performance on all devices.

## 🎯 Project Overview

This is a complete redesign of the skip selection page that transforms the original layout into a modern, engaging, and highly interactive experience while maintaining all core functionality.

## ✨ Key Features

## 🎨 Design & UX

- Dual Theme System: Beautiful dark/light mode with smooth transitions
- Modern Card Design: Premium skip cards with hover animations and gradients
- Interactive Elements: Micro-interactions, hover effects, and smooth animations
- Progressive Disclosure: Clean information hierarchy with visual cues
- Responsive Grid: Adaptive layout that works perfectly on all screen sizes

## 🛠 Technical Implementation

- Modern React: Functional components with hooks
- Redux Toolkit Query: Efficient data fetching and caching
- Context API: Global theme management
- Responsive Design: Mobile-first approach with Tailwind CSS
- Performance Optimized: Lazy loading, optimized renders, and smooth animations

## 🏗 Architecture

## Component Structure
<pre>
src/
├── components/
│   ├── SkipCard.jsx           # Individual skip display cards
│   ├── SkipSelectionFooter.jsx # Sticky selection summary
│   ├── Stepper.jsx            # Multi-step progress indicator
│   └── ThemeToggle.jsx        # Dark/light mode switcher
├── contexts/
│   └── ThemeContext.jsx       # Global theme state management
├── pages/
│   └── SkipSelectionPage.jsx  # Main page component   
│   └── NotFoundPage.jsx       # Not Found Page
├── store/
│   ├── api/skipsApi.js        # RTK Query API slice
│   └── store.js               # Redux store configuration
└── utils/
    └── constants/steps.js     # Step configuration data
</pre>
## State Management

- Redux Toolkit Query: API state management with caching
- React Context: Theme state management
- Local Component State: UI interactions and selections

## 🔧 Getting Started

## Prerequisites

- Node.js 16+
- npm or yarn

## Installation

- Clone the repository
- Install dependencies : npm install
- Start development server : npm run dev
