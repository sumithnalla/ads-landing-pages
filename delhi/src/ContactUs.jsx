import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzzwY6qp62FXWy0nM33gsHcjUlk-mzUCEY2PXH3hb4r2r1IcHfj_g4YMHSGbrHX4Ys/exec", {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus('Message Sent Successfully! Redirecting...');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        const path = window.location.pathname;
        if (path.endsWith('/')) {
          window.location.href = path + 'delhi-thankyou.html';
        } else if (path.endsWith('.html')) {
          const segments = path.split('/');
          segments[segments.length - 1] = 'delhi-thankyou.html';
          window.location.href = segments.join('/');
        } else {
          window.location.href = path + '/delhi-thankyou.html';
        }
      }, 500);
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Half: Details */}
        <div className="contact-info">
          <span className="info-badge">GET IN TOUCH</span>
          <h2>Reach Out To Us</h2>
          <p>We provide high-quality audio-visual solutions and projector rentals for all your corporate and social event needs across India.</p>
          
          <div className="info-item">
            <div className="icon"><MapPin size={24} /></div>
            <div>
              <h3>Visit Our Office</h3>
              <p>S-523A, School Block, Block S1, Shakarpur, New Delhi, Delhi, 110092</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon"><Phone size={24} /></div>
            <div>
              <h3>Call Us</h3>
              <p>+91 91330 33004</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon"><Mail size={24} /></div>
            <div>
              <h3>Email Us</h3>
              <p>ramsprojectorsonrent@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Half: Form */}
        <div className="contact-form-card">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="aakash varma" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="aakash@gmail.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="9876543210" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea rows="4" placeholder="How can we help you?" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message <Send size={18} style={{marginLeft: '8px', display: 'inline'}} /></button>
            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
