import React from 'react';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppSidebar />
      <AppHeader />
      <div className='pl-[250px] pt-[60px]'>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;