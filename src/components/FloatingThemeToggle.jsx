import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { useNavbar } from '../contexts/NavbarContext.jsx';

export default function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { isMenuOpen } = useNavbar();
  if (isMenuOpen) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 left-4 z-[70] w-12 h-12 flex items-center justify-center border-neo border-border bg-white shadow-neoSm text-text transition-all duration-300 hover:shadow-neo hover:-translate-y-0.5"
      title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun className="text-yellow" /> : <FaMoon className="text-text" />}
    </button>
  );
}
