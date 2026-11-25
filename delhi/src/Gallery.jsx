import React from 'react';

const Gallery = () => {
  const images = [
    "/ads/delhi/gallery/1.webp",
    "/ads/delhi/gallery/2.webp",
    "/ads/delhi/gallery/3.webp",
    "/ads/delhi/gallery/4.webp",
    "/ads/delhi/gallery/5.webp",
    "/ads/delhi/gallery/6.webp",
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">
          Professionalism Delivered with Perfection
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl shadow-sm bg-white">
              <img
                src={src}
                alt={`service-sample-${i}`}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
