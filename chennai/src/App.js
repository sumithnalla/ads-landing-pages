import React from 'react';
import HeroSection from './HeroSection';
import CallbackForm from './CallbackForm';
import EquipmentGrid from './EquipmentGrid';
import ReviewCarousel from './ReviewCarousel';
import Gallery from './Gallery';
import ContactUs from './ContactUs';

import { Process, FAQ } from './NewSections';
import FloatingButtons from './FloatingButtons';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <CallbackForm city="chennai" />
      <EquipmentGrid />
      <Process />
      <div id="reviews-section">
        <div style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '20px', background: '#fff' }}>
          <span style={{ color: '#e91e63', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Client Love</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '10px' }}>What Our Customers Say</h2>
        </div>
        <ReviewCarousel />
      </div>
      <Gallery />
      <ContactUs />
      <FAQ />
      <FloatingButtons />

      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '40px 20px', textAlign: 'center', fontSize: '0.9rem', borderTop: '1px solid #1e293b' }}>
        <p>&copy; {new Date().getFullYear()} Ram's Audio Visual Services. All Rights Reserved.</p>
        <p style={{ marginTop: '10px' }}>Chennai, Tamil Nadu | Serving India</p>
      </footer>
    </div>
  );
}

export default App;
