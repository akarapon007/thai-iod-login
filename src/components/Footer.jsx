import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <img src="/logoworktest.png" height={50} alt="Thai IOD Logo" />
        </div>
        <div className="footer-col">
          <h4>Membership</h4>
          <p>Member Fee Benefit</p>
        </div>
        <div className="footer-col">
          <h4>Other</h4>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📞 (+66) 2955 1155</p>
        </div>
      </div>
      {/* บรรทัดบนเส้น */}
      <div className="footer-copyright">
        Copyright © 2025 Thai Institute of Directors.
      </div>
      {/* เส้น */}
      <div className="footer-divider"></div>
      {/* บรรทัดล่าง */}
      <div className="footer-bottom">
        <span>Thai Institute of Directors Association</span>
        <span>Thailand</span>
      </div>
    </footer>
  );
}