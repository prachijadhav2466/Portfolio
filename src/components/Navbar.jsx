import React, { useState } from "react";
import ContactForm from "./ContactForm"; // Import the ContactForm component

const Navbar = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(!showContactForm);  // Toggle the visibility of the contact form
  };

  return (
    <div>
      <nav className="container nav_bar" aria-label="Primary navigation">
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items">Home</a>
          <a href="#experience" className="nav_items">Education</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Projects</a>
          <a
            href="#contact"
            className="nav_items"
            onClick={handleContactClick}  // Show ContactForm on click
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Conditionally render the ContactForm when 'showContactForm' is true */}
      {showContactForm && <ContactForm />}
    </div>
  );
};

export default Navbar;
