import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use the correct API endpoint for both local and production
    const apiUrl = process.env.NODE_ENV === "production"
      ? "/api/contact" // In production, Heroku will handle this automatically
      : "http://localhost:5174/api/contact"; // For local development

    try {
      const response = await axios.post(apiUrl, formData);

      if (response.status === 200) {
        setResponseMessage("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });  // Clear form
      } else {
        setResponseMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>

      {/* Social Media Links */}
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href="https://www.instagram.com/p_x_xx_x_i/" target="_blank" rel="noopener noreferrer" className="items">
          <FaInstagram className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/prachi-jadhav-57a7422a4" target="_blank" rel="noopener noreferrer" className="items">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://github.com/prachijadhav2466" target="_blank" rel="noopener noreferrer" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:prachidjadhav04@gmail.com" className="items">
          <SiGmail className="icons" />
        </a>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>

      {/* Inline CSS for styling */}
      <style jsx>{`
        .contact {
          padding: 50px 0;
          text-align: center;
          background-color: #f9f9f9;
        }

        .contact h1 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #333;
        }

        .contact-icon {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .contact-icon .icons {
          font-size: 30px;
          color: #333;
          transition: color 0.3s ease;
        }

        .contact-icon .icons:hover {
          color: #007bff;
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .contact-form h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #333;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: #555;
        }

        .input-group input, .input-group textarea {
          width: 100%;
          padding: 12px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 10px;
          background: #f8f8f8;
          color: #333;
          margin-top: 8px;
          transition: border-color 0.3s ease;
        }

        .input-group input:focus, .input-group textarea:focus {
          border-color: #007bff;
          outline: none;
        }

        textarea {
          height: 150px;
          resize: none;
        }

        .submit-button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: white;
          font-size: 1.1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .submit-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }

        .submit-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .response-message {
          margin-top: 20px;
          font-size: 1.2rem;
          color: #28a745;
        }
      `}</style>
    </div>
  );
};

export default Contact;
