import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between py-2">
          <h1 className="h3 mb-0">shulee</h1>
          <div className="flex-grow-1 mx-3">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;