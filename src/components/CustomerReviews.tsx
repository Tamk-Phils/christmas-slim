import React from 'react';

export const CustomerReviews: React.FC = () => {
  const moments = [
    { image: '/assets/images/bh-balsam-fir.jpg', user: '@claire_manor', model: 'BH Balsam Fir 9ft', likes: '1,420' },
    { image: '/assets/images/fraser-fir-wreath.jpg', user: '@harrison_residence', model: 'Fraser Fir Wreath', likes: '980' },
    { image: '/assets/images/balsam-fir-flip.jpg', user: '@nordic_living', model: 'Flip Tree® 7.5ft', likes: '2,130' },
    { image: '/assets/images/european-fir.jpg', user: '@vermont_cottage', model: 'European Fir', likes: '854' },
    { image: '/assets/images/outdoor-berry-wreath.jpg', user: '@holly_design_co', model: 'Berry Burst Wreath', likes: '1,120' },
    { image: '/assets/images/sanibel-spruce.jpg', user: '@balsam_collector', model: 'Sanibel Spruce', likes: '1,840' }
  ];

  return (
    <section className="ugc-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-eyebrow">Real Customer Homes</span>
          <h2 className="section-title">#BalsamHillMoments</h2>
          <p className="section-subtitle">Tag @BalsamHill on Instagram to be featured in our seasonal lookbook.</p>
        </div>

        <div className="ugc-grid">
          {moments.map((item, i) => (
            <div key={i} className="ugc-item">
              <img src={item.image} alt={item.model} loading="lazy" />
              <div className="ugc-overlay">
                <strong>{item.user}</strong>
                <p>{item.model}</p>
                <span>❤️ {item.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
