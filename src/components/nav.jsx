import React, { useState, useEffect } from 'react';

function Nav() {
  return (
    <nav className="flex items-center justify-end w-full p-3 bg-white dark:bg-gray-800 shadow">
      <div className='mr-140 text-2xl text-gray-800 dark:text-gray-200 font-medium'>
        <h3>Welcome, John Doe</h3>
      </div>
      <div className="flex items-center space-x-4"> 
        <div className="flex items-center">
          <img src="/images/img2.jpg" alt="User Profile" className="w-10 h-10 rounded-full ml-6"/>
          <span className="ml-2 text-gray-800 dark:text-gray-200 font-medium">
            John Doe
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
