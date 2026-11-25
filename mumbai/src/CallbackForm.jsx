import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const CallbackForm = ({ city }) => {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    if (value.length > 0 && !/^[6-9]/.test(value)) {
      setError('Mobile numbers must start with 6, 7, 8, or 9');
    } else {
      setError('');
    }
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit number');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError('Please enter a valid Indian mobile number');
      return;
    }
    setError('');
    setStatus('Sending...');

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzzwY6qp62FXWy0nM33gsHcjUlk-mzUCEY2PXH3hb4r2r1IcHfj_g4YMHSGbrHX4Ys/exec", {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Immediate Callback',
          email: 'callback@landingpage.com',
          phone: phone,
          message: `${city} landingpage`
        }),
      });
      setStatus('Successfully requested! Redirecting...');
      setTimeout(() => {
        const path = window.location.pathname;
        let targetName = `${city}-thankyou.html`;
        if (path.endsWith('/')) {
          window.location.href = path + targetName;
        } else if (path.endsWith('.html')) {
          const segments = path.split('/');
          segments[segments.length - 1] = targetName;
          window.location.href = segments.join('/');
        } else {
          window.location.href = path + '/' + targetName;
        }
      }, 500);
    } catch (err) {
      setStatus('Error requesting callback. Please try again.');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <span className="text-[#003a8c] font-extrabold text-xs tracking-widest uppercase">Quick Quote</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Get an Immediate Quote in 10 Mins</h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Enter your 10-digit mobile number, and our audio-visual technical specialist will call you back right away to discuss your event requirements.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative w-full sm:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-slate-500 text-sm font-semibold border-r border-slate-200 pr-3">+91</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="98765 43210"
                className={`w-full pl-16 pr-4 py-3.5 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${error ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-100 focus:border-[#003a8c]'
                  }`}
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="w-full sm:w-1/2 bg-[#003a8c] hover:bg-[#002766] text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:bg-blue-400"
            >
              <Phone size={18} />
              {status === 'Sending...' ? 'Processing...' : 'Request Callback'}
              <ArrowRight size={18} />
            </button>
          </div>
          {error && <p className="text-red-500 text-sm text-left mt-2 font-medium">{error}</p>}
          {status && status !== 'Sending...' && (
            <p className="text-green-600 text-sm text-center mt-3 font-medium">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default CallbackForm;
