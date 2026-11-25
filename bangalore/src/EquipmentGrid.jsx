import React, { useRef, useState, useEffect } from 'react';
import { Star, Zap, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import './EquipmentGrid.css';
import { equipment } from './equipData';

const EquipmentCard = ({ item }) => {
  return (
    <div className="equip-card">
      <div className="image-part">
        {item.badge && <span className="badge-box">{item.badge}</span>}
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="desc-part">
        <div className="rating-row">
          <Star className="star-icon" size={14} fill="#f4b400" color="#f4b400" />
          <span className="rating-num">{item.rating}</span>
          <span className="booked-count">({item.bookedCount} rentals)</span>
        </div>
        <h3 className="equip-name">{item.name}</h3>
        <p className="equip-model">{item.model}</p>

        <div className="price-section">
          <div className="price-tag">
            <span className="currency">&#8377;</span>
            <span className="amount">{item.price}</span>
            <span className="period">/day</span>
          </div>
          <div className="extra-day">
            Additional day at &#8377;{item.extraPrice}
          </div>
        </div>

        <div className="features-mini">
          <div className="feature-pill"><Zap size={12} /> Fast Setup</div>
          <div className="feature-pill"><Info size={12} /> Support Incl.</div>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ title, category }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isCompactScreen, setIsCompactScreen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const items = equipment.filter(item => item.category === category);
  const thumbWidth = Math.max(100 / Math.max(items.length, 1), 15);
  const maxTrackOffset = 100 - thumbWidth;
  const thumbTranslate = thumbWidth > 0
    ? (scrollProgress * maxTrackOffset * 100) / thumbWidth
    : 0;

  useEffect(() => {
    const checkCompactScreen = () => {
      setIsCompactScreen(window.innerWidth <= 1024);
    };

    checkCompactScreen();
    window.addEventListener('resize', checkCompactScreen);

    return () => window.removeEventListener('resize', checkCompactScreen);
  }, []);

  useEffect(() => {
    const updateCarouselState = () => {
      if (!scrollRef.current) {
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = Math.max(scrollWidth - clientWidth, 0);

      setShowLeftArrow(isCompactScreen && scrollLeft > 10);
      setShowRightArrow(isCompactScreen && scrollLeft < maxScroll - 10);
      setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
    };

    const scrollElement = scrollRef.current;
    if (!scrollElement) {
      return undefined;
    }

    updateCarouselState();
    scrollElement.addEventListener('scroll', updateCarouselState, { passive: true });
    window.addEventListener('resize', updateCarouselState);

    return () => {
      scrollElement.removeEventListener('scroll', updateCarouselState);
      window.removeEventListener('resize', updateCarouselState);
    };
  }, [isCompactScreen, items.length]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="category-group mb-16">
      <h3 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-pink-600">
        {title}
      </h3>

      <div className="category-carousel-shell">
        <div className="category-carousel">
          {isCompactScreen && showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="scroll-arrow scroll-arrow-left"
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>
          )}

          {isCompactScreen && showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="scroll-arrow scroll-arrow-right"
              aria-label="Scroll right"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          )}

          <div ref={scrollRef} className="equip-grid-container">
            {items.map(item => <EquipmentCard key={item.id} item={item} />)}
          </div>
        </div>

        <div className="scroll-progress-track" aria-hidden="true">
          <span
            className="scroll-progress-thumb"
            style={{
              width: `${thumbWidth}%`,
              transform: `translateX(${thumbTranslate}%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default function EquipmentGrid() {
  const categories = [
    { title: "Projector & Screen Rental", category: "projector" },
    { title: "Sound System & Speaker Rental", category: "sound" },
    { title: "Microphone Rental", category: "mic" },
    { title: "TVs", category: "tv" },
    { title: "Combo Packages", category: "combo" }
  ];

  return (
    <section className="equipment-section">
      <div className="section-header">
        <span className="section-subtitle">Rental Services Bangalore</span>
        <h2 className="section-title">Audio Visual Equipment on Rent</h2>
        <p className="section-desc">Reliable AV rental services for events near you. High-quality equipment with technical support.</p>
      </div>

      {categories.map((cat, idx) => (
        <CategorySection
          key={idx}
          title={cat.title}
          category={cat.category}
        />
      ))}
    </section>
  );
}
