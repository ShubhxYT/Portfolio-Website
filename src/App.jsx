import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Agentation } from 'agentation';
import Header from './components/Header.jsx';
import Squares from './components/Squares.jsx';
import { NavbarProvider } from './contexts/NavbarContext.jsx';
import { useTheme } from './contexts/ThemeContext.jsx';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import Resume from './pages/Resume.jsx';

function App() {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <NavbarProvider>
      <div className="relative min-h-screen bg-bg text-text overflow-hidden">
        <div className="fixed inset-0 z-0 opacity-50">
          <Squares
            speed={0.2}
            squareSize={35}
            direction="diagonal"
            borderColor={theme === 'dark' ? 'rgba(168,230,207,0.15)' : 'rgba(0,0,0,0.08)'}
            hoverFillColor={theme === 'dark' ? 'rgba(255,107,157,0.4)' : 'rgba(255,217,61,0.5)'}
            gradientColorStart={theme === 'dark' ? '#1a1a1a' : '#ffffff'}
            gradientColorEnd={theme === 'dark' ? '#0a0a0a' : '#f0f0f0'}
          />
        </div>

        <Header />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>

        {process.env.NODE_ENV === "development" && <Agentation />}
      </div>
    </NavbarProvider>
  );
}

export default App;
