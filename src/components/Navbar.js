import { useState } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link'; // Correct import for Next.js
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Replace with your actual EmailJS service ID, template IDs, and public key
  const serviceID = 'service_fcdy0vr';
  const templateID = 'template_wstbnwp';
  const thankYouTemplateID = 'template_o80x0ul';
  const publicKey = '2nUOnnhepoPwi0g-3';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(
        result => {
          console.log('Email successfully sent to us!', result.text);
          sendThankYouEmail();
          setIsSubmitted(true);
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        error => {
          console.error('Failed to send email to us:', error);
          alert(`Failed to send your message. Error: ${error.text}`);
        }
      );
  };

  const sendThankYouEmail = () => {
    const thankYouEmailData = {
      name: formData.name,
      to_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, thankYouTemplateID, thankYouEmailData, publicKey)
      .then(
        result => {
          console.log('Thank-you email successfully sent to user!', result.text);
        },
        error => {
          console.error('Failed to send thank-you email:', error);
          alert(`Failed to send the thank-you email. Error: ${error.text}`);
        }
      );
  };

  const toggleContactSlider = () => {
    setIsContactOpen(!isContactOpen);
    setSuccessMessage('');
    document.body.style.overflow = isContactOpen ? 'auto' : 'hidden';
  };

  const closeForm = () => {
    setIsContactOpen(false);
    setSuccessMessage('');
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Gurusewak</div>
      <ul className={styles.menu}>
        <li><Link href="/home" onClick={() => setIsContactOpen(false)}>Home</Link></li>
        <li><Link href="/project" onClick={() => setIsContactOpen(false)}>Projects</Link></li>
        <li><Link href="/about" onClick={() => setIsContactOpen(false)}>About</Link></li>
        <li><Link href="#contact" onClick={toggleContactSlider}>Contact</Link></li>
      </ul>
      <div className={styles.actions}>
        <button className={styles.contactButton} onClick={toggleContactSlider}>Contact Us</button>
      </div>
      {isContactOpen && <div className={styles.overlay} onClick={closeForm}></div>}
      <div className={`${styles.contactSlider} ${isContactOpen ? styles.sliderOpen : ''}`}>
        <div className={styles.formHeader}>
          <h2>Contact Us</h2>
          <button className={styles.closeButton} onClick={closeForm}>X</button>
        </div>
        {successMessage && (
          <div className={styles.successMessage}>
            {successMessage}
          </div>
        )}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </nav>
  );
}
