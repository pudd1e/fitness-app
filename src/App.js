import React, { useState, useEffect } from 'react';
import PINLogin from './components/PINLogin';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [data, setData] = useState({
    workouts: [],
    weights: {},
    customExercises: [],
    achievements: [],
    goalWeight: 0,
    goalType: 'lose',
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('fitnessAppData');
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        console.error('Failed to load data:', e);
      }
    }

    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    applyTheme(isDark);
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fitnessAppData', JSON.stringify(data));
  }, [data]);

  const applyTheme = (dark) => {
    if (dark) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  };

  const handleThemeChange = (dark) => {
    setIsDarkMode(dark);
    applyTheme(dark);
  };

  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {!isAuthenticated ? (
        <PINLogin onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <Dashboard
          onLogout={handleLogout}
          isDarkMode={isDarkMode}
          setIsDarkMode={handleThemeChange}
          data={data}
          updateData={updateData}
        />
      )}
    </div>
  );
};

export default App;
