import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="topbar"></div>
      <div className="header-main">
        {/* LEFT GROUP */}
        <div className="header-left">
          <div className="logo">
            <img src="/logoworktest.png" alt="Thai IOD Logo" />
          </div>
          <nav className="menu">
            <a>Member Fee Benefit</a>
            <a>Director Pool</a>
            <a>Director Search</a>
          </nav>
        </div>
        {/* RIGHT */}
        <div className="user">👤</div>
      </div>
    </header>
  );
}