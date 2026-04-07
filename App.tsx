
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Labs } from './pages/Labs';
import { Shop } from './pages/Shop';
import { AiCoach } from './pages/AiCoach';
import { Player } from './pages/Player';
import { UserProvider } from './context/UserContext';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentPage, setCurrentPage] = useState<'main' | 'player'>('main');
  const [pageParams, setPageParams] = useState<any>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleNavigate = (page: string, params?: any) => {
    if (page === 'player') {
      setPageParams(params);
      setCurrentPage('player');
    } else {
        // Handle other internal navs if needed
        setActiveTab(page); 
    }
  };

  const handleWorkoutComplete = () => {
    setCurrentPage('main');
    setPageParams(null);
    setActiveTab('home');
    // Trigger celebration on Home screen
    setShowCelebration(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home 
            onNavigate={handleNavigate} 
            showCelebration={showCelebration}
            onCelebrationComplete={() => setShowCelebration(false)}
          />
        );
      case 'labs':
        return <Labs onNavigate={handleNavigate} />;
      case 'shop':
        return <Shop />;
      case 'ai':
        return <AiCoach />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  if (currentPage === 'player') {
    return (
      <Player 
        workoutId={pageParams?.workoutId} 
        onBack={() => {
          setCurrentPage('main');
          setPageParams(null);
        }}
        onComplete={handleWorkoutComplete}
      />
    );
  }

  return (
    <div className="antialiased text-charcoal bg-sand min-h-screen">
      <main className="max-w-md mx-auto bg-white min-h-screen relative shadow-2xl overflow-hidden">
        {renderContent()}
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

export default App;
