import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar-tamal">
      <div className="nav-logo">
        {/* เปลี่ยนเป็นชื่อคุณได้เลย */}
        Chayutphol<span>._</span> 
      </div>

      <div className="nav-menu-tamal">
        <a href="#home">
          <span className="nav-num">01</span>
          <span className="nav-text">// home</span>
        </a>
        <a href="#about">
          <span className="nav-num">02</span>
          <span className="nav-text">// about</span>
        </a>
        <a href="#experience">
          <span className="nav-num">03</span>
          <span className="nav-text">// experience</span>
        </a>
        <a href="#work">
          <span className="nav-num">04</span>
          <span className="nav-text">// work</span>
        </a>
        <a href="#contact">
          <span className="nav-num">05</span>
          <span className="nav-text">// contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;