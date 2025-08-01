import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App() {
  // Track current page: 'login', 'signup', 'dashboard'
  const [page, setPage] = useState('login');

  // Store user email on login/signup
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setUserEmail(email);
    setPage('dashboard');
  };

  const handleSignup = (email) => {
    setUserEmail(email);
    setPage('dashboard');
  };

  const handleLogout = () => {
    setUserEmail('');
    setPage('login');
  };

  return (
    <div>
      {page === 'login' && (
        <Login
          onLogin={handleLogin}
          switchToSignup={() => setPage('signup')}
        />
      )}
      {page === 'signup' && (
        <Signup
          onSignup={handleSignup}
          switchToLogin={() => setPage('login')}
        />
      )}
      {page === 'dashboard' && (
        <Dashboard
          userEmail={userEmail}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;
