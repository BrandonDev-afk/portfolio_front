import React from 'react';
import Navbar from '../Navbar';
import Footer from '../../ui/Footer';
import BackToTopButton from '../../ui/BackToTopButton';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;