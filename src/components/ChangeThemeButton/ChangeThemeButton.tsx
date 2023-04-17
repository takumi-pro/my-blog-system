import { useTheme } from 'next-themes';
import React from 'react';

const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </>
  );
};

export default ChangeThemeButton;
