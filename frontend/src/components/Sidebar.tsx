import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  role?: 'admin' | 'doctor' | 'nurse';
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const renderLinks = () => {
    switch (role) {
      case 'admin':
        return (
          <>
            <Link to="/admin" className="block py-2">Admin Home</Link>
            <Link to="/admin/users" className="block py-2">Manage Users</Link>
          </>
        );
      case 'doctor':
        return (
          <>
            <Link to="/doctor" className="block py-2">Doctor Dashboard</Link>
            <Link to="/doctor/patients" className="block py-2">Patients</Link>
          </>
        );
      case 'nurse':
        return (
          <>
            <Link to="/nurse" className="block py-2">Nurse Dashboard</Link>
            <Link to="/nurse/vitals" className="block py-2">Record Vitals</Link>
          </>
        );
      default:
        return <p className="text-sm">No role found</p>;
    }
  };

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4 capitalize">{role} Panel</h2>
      {renderLinks()}
    </aside>
  );
};

export default Sidebar;
