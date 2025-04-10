import React, { useState, useEffect } from 'react';

const Header=({ openLoginModal })=> {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(userPrefersDark);
      document.documentElement.classList.toggle('dark', userPrefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <header className="flex flex-wrap w-full px-20 py-4 sticky top-0 left-0 right-0 text-black items-center bg-white">
      <ul className="flex gap-10 text-sm font-semibold">
        <li><a href="/home">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <button className="ml-auto text-black hover:text-white text-base px-4 py-2 rounded-lg border-2 shadow-md drop-shadow-lg bg-none hover:bg-[#34495e] hover:border-[#34495e]" onClick={openLoginModal}>Mag-Login</button>
      {/* <button
        className="ml-4 text-black hover:text-white text-base px-4 py-2 rounded-lg border-2 bg-none hover:bg-[#34495e] dark:text-white dark:hover:bg-gray-600"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
    </header>
  );
};

export default Header;