import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => {
  const ctx = useContext(NavbarContext);
  if (!ctx) throw new Error('useNavbar must be used within NavbarProvider');
  return ctx;
};

export const NavbarProvider = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        isNavbarVisible,
        hideNavbar: () => setIsNavbarVisible(false),
        showNavbar: () => setIsNavbarVisible(true),
        isMenuOpen,
        openMenu: () => setIsMenuOpen(true),
        closeMenu: () => setIsMenuOpen(false),
        toggleMenu: () => setIsMenuOpen((p) => !p),
        setIsMenuOpen,
        isResumeModalOpen,
        openResumeModal: () => setIsResumeModalOpen(true),
        closeResumeModal: () => setIsResumeModalOpen(false),
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
