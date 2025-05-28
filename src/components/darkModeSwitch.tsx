import { useState } from "react";
import { Sun, Moon } from 'lucide-react';


function DarkModeSwitcher() {

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  
    const [isDark, setIsDark] = useState(localStorage.theme === 'dark');
  
    const toggleTheme = () => {
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      } else {
        localStorage.theme = 'dark';
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    };
  
    return (
      <button type="button"
              className="py-1 px-3 text-xl text-gray-900 rounded hover:cursor-pointer hover:text-slate-800 transition-colors dark:text-gray-300 dark:hover:text-slate-50"
              onClick={toggleTheme}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        <span className="sr-only">Changer de mode de couleurs</span>
      </button>
    );
  }
  
  export default DarkModeSwitcher;