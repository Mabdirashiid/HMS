// src/pages/NotFound.tsx

import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-lg mt-2 text-gray-600">Oops! Page not found.</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Go back to login
      </Link>
    </div>
  );
}

export default NotFound;
