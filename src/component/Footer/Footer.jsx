// Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-3" style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <p>&copy; {currentYear} Color Picker App Developed By Manish Verma</p>
    </footer>
  );
}

export default Footer;
