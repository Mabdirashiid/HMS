import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';

interface Props {
  children?: ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen">
      <Sidebar role={user?.role} />
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
