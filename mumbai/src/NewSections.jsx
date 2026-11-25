import React from 'react';
import { CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    { num: "01", title: "Enquiry", desc: "Share your event requirements and dates." },
    { num: "02", title: "Quotation", desc: "Receive a customized, competitive quote." },
    { num: "03", title: "Setup", desc: "Professional installation by our expert team." },
    { num: "04", title: "Event", desc: "Enjoy a flawless audio-visual experience." }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Seamless Process</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              <div className="text-6xl font-black text-white/10 absolute -top-10 left-1/2 -translate-x-1/2">{s.num}</div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{s.title}</h3>
              <p className="text-slate-400 relative z-10">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Do you provide operators?", a: "Yes, we can provide dedicated technicians to manage the equipment throughout your event." },
    { q: "What is your delivery range?", a: "We primarily serve Hyderabad but can handle events across Mumbai, Bangalore, Chennai also with advance booking." },
    { q: "Can I rent for just a few hours?", a: "Our standard rental is for 24 hours (1 day), but we offer competitive rates for multi-day bookings." }
  ];

  return (
    <>
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-slate-700 leading-relaxed font-medium italic">
            "We provide projector rental, sound system rental, speaker and microphone rental, LED screen and LED wall rental services in Mumbai. Our AV equipment is ideal for corporate events, private parties, weddings, conferences and outdoor events. If you are searching for audio visual rentals near you, our mumbai team offers fast setup and reliable support."
          </p>
        </div>
      </section>
      <section className="py-20 bg-white" id="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                  <CheckCircle className="text-pink-600" size={20} /> {faq.q}
                </h3>
                <p className="text-slate-600 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { Process, FAQ };
