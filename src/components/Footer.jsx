
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fo">
        <div className="content">
          <p>© {new Date().getFullYear()} Mughal Foods. All rights reserved.</p>

          <div className="link">
            <a href="/privacy" className="link-style">
              Privacy Policy
            </a>

            <a href="/terms" className="link-style">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
