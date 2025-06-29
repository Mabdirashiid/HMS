import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth(); // 👈 Place it here

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 shadow">
      <span>Welcome {user?.name || 'Guest'}</span>
      {user && (
        <button onClick={logout} className="text-sm text-red-600 hover:underline">
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
