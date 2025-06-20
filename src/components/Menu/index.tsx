import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const actualTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return actualTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevState => {
      const nextTheme = prevState === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para o histórico'
        title='Ir para o histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para configurações'
        title='Ir para configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Alterar tema'
        title='Alterar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
