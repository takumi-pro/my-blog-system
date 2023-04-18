import { useTheme } from 'next-themes';
import React from 'react';

import style from './ChangeThemeButton.module.css';

const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button className={`${style.bg}`} onClick={() => setTheme('light')}>
        Light Mode
      </button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </>
  );
};

export default ChangeThemeButton;
