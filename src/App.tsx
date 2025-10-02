import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import OrganizerDashboard from './components/OrganizerDashboard';
import { User as UserType } from './types';

function App() {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  const handleLogin = (user: UserType) => {
    if (user.role === 'organizer') {
      setCurrentUser(user);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <OrganizerDashboard user={currentUser} onLogout={handleLogout} />
    </div>
  );
}

export default App;

